import { useState } from "react"
import PhraseForm from "../components/PhraseForm"
import SearchBar from "../components/SearchBar"
import  PhraseCard  from "../components/PhraseCard"
import { usePhrases } from "../context/PhraseContext"

export const Home = () => {
  const { phrases, addPhrase, removePhrase } = usePhrases()
  const [text, setText] = useState("")
  const [search, setSearch] = useState("")

  const filteredPhrases = phrases.filter((p) =>
    p.text.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="w-full max-w-xl p-6 rounded-lg shadow-lg bg-gray-800">
        <div className="flex items-center justify-center mb-6">
          <span className="text-9xl mr-2">📝</span>
          <h1 className="text-4xl font-bold text-center">Frases App</h1>
        </div>

        <PhraseForm
          text={text}
          setText={setText}
          onAdd={() => {
            if (text.trim()) {
              addPhrase(text)
              setText("")
            }
          }}
        />

        <SearchBar onSearch={setSearch} />

        <p className="text-sm mb-2 text-center">
          Mostrando {filteredPhrases.length} de {phrases.length} frases
        </p>

        {filteredPhrases.length === 0 ? (
          <p className="text-center text-gray-400">
            No se encontraron frases que coincidan.
          </p>
        ) : (
          <div className="space-y-2">
            {filteredPhrases.map((phrase) => (
              <PhraseCard key={phrase.id} phrase={phrase} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}