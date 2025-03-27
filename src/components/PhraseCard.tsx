import { Phrase } from "../types/Phrase"
import { usePhrases } from "../context/PhraseContext"

interface PhraseCardProps {
  phrase: Phrase
}

const PhraseCard = ({ phrase }: PhraseCardProps) => {
  const { removePhrase } = usePhrases()

  return (
    <div className="bg-gray-700 rounded-lg shadow-md p-4 flex justify-between items-center transition-transform hover:scale-105">
      <p className="text-white">{phrase.text}</p>
      <button
        onClick={() => removePhrase(phrase.id)}
        title="Eliminar frase"
        className="ml-4 bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full transition"
      >
        ✖
      </button>
    </div>
  )
}

export default PhraseCard
