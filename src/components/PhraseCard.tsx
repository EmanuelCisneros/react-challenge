import { Phrase } from "../types/Phrase"
import { usePhrases } from "../context/PhraseContext"

interface PhraseCardProps {
  phrase: Phrase
}

export const PhraseCard = ({ phrase }: PhraseCardProps) => {
  const { removePhrase } = usePhrases()

  return (
    <div className="bg-white shadow-md rounded p-4 flex justify-between items-center transition-all duration-200 hover:scale-[1.02]">
      <p className="text-gray-800">{phrase.text}</p>
      <button
        onClick={() => removePhrase(phrase.id)}
        className="ml-4 text-red-500 hover:text-red-700 transition-transform hover:scale-110"
        title="Eliminar frase"
      >
        ✕
      </button>
    </div>
  )
}