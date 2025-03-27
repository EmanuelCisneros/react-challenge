import { useState } from "react"
import { usePhrases } from "../context/PhraseContext"

const PhraseForm = () => {
  const [text, setText] = useState("")
  const { addPhrase } = usePhrases()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim() === "") return
    addPhrase(text.trim())
    setText("")
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 mr-2 rounded w-full sm:w-auto"
        placeholder="Escribí una frase"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2 sm:mt-0">
        Agregar
      </button>
    </form>
  )
}

export default PhraseForm