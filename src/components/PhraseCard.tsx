import { motion } from "framer-motion"
import { Phrase } from "../types/Phrase"
import { X } from "lucide-react"

interface Props {
  phrase: Phrase
  onDelete: () => void
}

const PhraseCard = ({ phrase, onDelete }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex justify-between items-center bg-white/20 dark:bg-white/10 text-white dark:text-gray-200 rounded-xl px-4 py-2 shadow-sm hover:shadow-md transition-all"
    >
      <span className="text-lg">{phrase.text}</span>

      <button
        onClick={onDelete}
        className="ml-3 p-1 rounded-full hover:text-red-500 transition-colors"
        aria-label="Eliminar frase"
      >
        <X className="w-5 h-5" />
      </button>
    </motion.div>
  )
}

export default PhraseCard