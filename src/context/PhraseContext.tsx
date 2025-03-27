import { createContext, useContext, useState, ReactNode } from "react"
import { Phrase } from "../types/Phrase"
import { v4 as uuidv4 } from "uuid"

interface PhraseContextType {
  phrases: Phrase[]
  addPhrase: (text: string) => void
  removePhrase: (id: string) => void
}

const PhraseContext = createContext<PhraseContextType | undefined>(undefined)

export const usePhrases = () => {
  const context = useContext(PhraseContext)
  if (!context) throw new Error("usePhrases debe usarse dentro del PhraseProvider")
  return context
}

export const PhraseProvider = ({ children }: { children: ReactNode }) => {
  const [phrases, setPhrases] = useState<Phrase[]>([])

  const addPhrase = (text: string) => {
    const newPhrase = { id: uuidv4(), text }
    setPhrases((prev) => [...prev, newPhrase])
  }

  const removePhrase = (id: string) => {
    setPhrases((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <PhraseContext.Provider value={{ phrases, addPhrase, removePhrase }}>
      {children}
    </PhraseContext.Provider>
  )
}