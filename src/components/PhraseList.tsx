import { useMemo } from "react"
import { Phrase } from "../types/Phrase"
import PhraseCard from "./PhraseCard"
import { motion, AnimatePresence } from "framer-motion"

interface PhraseListProps {
  phrases: Phrase[]
  onDelete: (id: string) => void
  searchTerm?: string
}

const PhraseList = ({ phrases, onDelete, searchTerm = "" }: PhraseListProps) => {
  const filteredPhrases = useMemo(() => {
    return phrases.filter((phrase) =>
      phrase.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [phrases, searchTerm])

  return (
    <div className="space-y-3">
      <AnimatePresence>
        {filteredPhrases.map((phrase) => (
          <motion.div
            key={phrase.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <PhraseCard phrase={phrase} onDelete={() => onDelete(phrase.id)} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default PhraseList