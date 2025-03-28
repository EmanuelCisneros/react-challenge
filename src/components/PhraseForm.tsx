import { useState } from "react"
import { motion } from "framer-motion"
import { formStyles } from "./ui/formVariants"

interface PhraseFormProps {
  text: string
  setText: (value: string) => void
  onAdd: () => Promise<void> | void
}

const { input, button } = formStyles()

const PhraseForm = ({ text, setText, onAdd }: PhraseFormProps) => {
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!text.trim()) return

    try {
      await onAdd()
    } catch (err) {
      setError("Ocurrió un error al agregar la frase.")
      console.error("Error al agregar frase:", err)
    }
  }

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex gap-3 mb-6"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribí una frase"
          className={input()}
        />
        <button type="submit" className={button()}>
          Agregar
        </button>
      </motion.form>

      {error && (
        <span className="text-red-400 text-sm mb-4 block animate-pulse">
          {error}
        </span>
      )}
    </>
  )
}

export default PhraseForm