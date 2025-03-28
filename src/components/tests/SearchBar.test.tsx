import { render, screen, fireEvent } from "@testing-library/react"
import SearchBar from "../SearchBar"

describe("SearchBar", () => {
  it("debe llamar a onSearch cuando se escribe en el input", () => {
    const mockSearch = jest.fn()
    render(<SearchBar onSearch={mockSearch} />)

    const input = screen.getByPlaceholderText("Buscar frases...") as HTMLInputElement
    fireEvent.change(input, { target: { value: "Hola" } })

    expect(mockSearch).toHaveBeenCalledWith("Hola")
  })
})