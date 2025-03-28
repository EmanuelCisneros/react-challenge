import { motion } from "framer-motion"
import { formStyles } from "./ui/formVariants"
interface PhraseFormProps {
  text: string
  setText: (value: string) => void
  onAdd: () => void
}

const { input, button } = formStyles()

const PhraseForm = ({ text, setText, onAdd }: PhraseFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    onAdd()
  }

  return (
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
  )
}

export default PhraseForm