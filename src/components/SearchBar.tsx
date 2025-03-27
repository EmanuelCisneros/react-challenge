interface SearchBarProps {
  onSearch: (query: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Buscar frases"
      onChange={(e) => onSearch(e.target.value)}
      className="border p-2 rounded mb-4 w-full"
    />
  )
}

export default SearchBar
