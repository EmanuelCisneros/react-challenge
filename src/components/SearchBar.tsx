import { motion } from "framer-motion"
interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <input
        type="text"
        placeholder="Buscar frases..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2 rounded-xl mb-4 text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </motion.div>
  )
}

export default SearchBar
