interface SearchBarProps {
  onSearch: (value: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Buscar frases..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full px-4 py-2 rounded-xl text-black dark:text-white dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-4 transition-colors"
    />
  )
}

export default SearchBar