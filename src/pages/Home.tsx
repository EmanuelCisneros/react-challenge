import { useState } from "react"
import PhraseForm from "../components/PhraseForm"
import SearchBar from "../components/SearchBar"
import { PhraseCard } from "../components/PhraseCard"
import { usePhrases } from "../context/PhraseContext"
import { useDebounce } from "../hooks/useDebounce"

export const Home = () => {
  const { phrases } = usePhrases()
  const [query, setQuery] = useState("")
  const debouncedQuery = useDebounce(query, 300)

  const filtered = phrases.filter((p) =>
    p.text.toLowerCase().includes(debouncedQuery.toLowerCase())
  )

  return (
    <div className="max-w-2xl mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Frases App</h1>
      <PhraseForm />
      <SearchBar onSearch={setQuery} />
      <p className="text-sm text-gray-600 mt-2 mb-4">
        Mostrando {filtered.length} de {phrases.length} frases
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((phrase) => (
          <PhraseCard key={phrase.id} phrase={phrase} />
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 col-span-full mt-4">
            No se encontraron frases que coincidan.
          </p>
        )}
      </div>
    </div>
  )
}