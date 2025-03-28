import { useState } from "react"
import PhraseForm from "../components/PhraseForm"
import SearchBar from "../components/SearchBar"
import PhraseList from "../components/PhraseList"
import Header from "../components/Header"
import { usePhraseStore } from "../store/usePhraseStore"

export const Home = () => {
  const { phrases, addPhrase, removePhrase } = usePhraseStore()
  const [text, setText] = useState("")
  const [search, setSearch] = useState("")

  const filteredPhrases = phrases.filter((p) =>
    p.text.toLowerCase().includes(search.toLowerCase())
  )

  const handleAdd = () => {
    if (!text.trim()) return
    addPhrase(text.trim())
    setText("")
  }

  return (
    <main className="min-h-screen bg-neutral-900 text-white dark:bg-zinc-900 flex items-center justify-center px-4">
      <section className="w-full max-w-2xl bg-white/5 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-2xl transition-all">
        <Header />

        <PhraseForm text={text} setText={setText} onAdd={handleAdd} />
        <SearchBar onSearch={setSearch} />

        <p className="text-sm mb-4 text-center text-gray-100 dark:text-gray-300">
          Mostrando {filteredPhrases.length} de {phrases.length} frases
        </p>

        {filteredPhrases.length === 0 ? (
          <p className="text-center text-gray-300 dark:text-gray-400 italic">
            No se encontraron frases que coincidan.
          </p>
        ) : (
          <PhraseList phrases={filteredPhrases} onDelete={removePhrase} />
        )}
      </section>
    </main>
  )
}