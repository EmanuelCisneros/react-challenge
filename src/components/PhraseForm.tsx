import { useState } from "react"
import { usePhrases } from "../context/PhraseContext"

const PhraseForm = () => {
  const [text, setText] = useState("")
  const { addPhrase } = usePhrases()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    addPhrase(text.trim())
    setText("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribí una frase"
        className="flex-grow p-2 rounded-md bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold py-2 px-4 rounded-md shadow-md"
      >
        Agregar
      </button>
    </form>
  )
}

export default PhraseForm