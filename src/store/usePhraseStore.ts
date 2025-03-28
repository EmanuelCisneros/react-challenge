import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Phrase {
  id: string
  text: string
}

interface PhraseState {
  phrases: Phrase[]
  addPhrase: (text: string) => void
  removePhrase: (id: string) => void
}

export const usePhraseStore = create<PhraseState>()(
  persist(
    (set, get) => ({
      phrases: [],
      addPhrase: (text) => {
        const newPhrase: Phrase = { id: crypto.randomUUID(), text }
        set({ phrases: [...get().phrases, newPhrase] })
      },
      removePhrase: (id) => {
        set({ phrases: get().phrases.filter((p) => p.id !== id) })
      },
    }),
    {
      name: 'phrases-storage',
      storage: {
        getItem: async (key) =>
          JSON.parse(localStorage.getItem(key) || 'null'),
        setItem: async (key, value) =>
          localStorage.setItem(key, JSON.stringify(value)),
        removeItem: async (key) => localStorage.removeItem(key),
      },
    }
  )
)
