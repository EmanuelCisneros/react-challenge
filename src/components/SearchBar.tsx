interface SearchBarProps {
    onSearch: (query: string) => void
  }
  
  const SearchBar = ({ onSearch }: SearchBarProps) => {
    return (
      <input
        type="text"
        placeholder="Buscar frases"
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />
    )
  }
  
  export default SearchBar
  