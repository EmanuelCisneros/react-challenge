import { render, screen, fireEvent } from "@testing-library/react"
import PhraseCard from "../PhraseCard"
import { Phrase } from "../../types/Phrase"

describe("PhraseCard", () => {
  const mockDelete = jest.fn()
  const phrase: Phrase = { id: "1", text: "Frase de prueba" }

  beforeEach(() => {
    mockDelete.mockClear()
  })

  it("debe mostrar el texto de la frase", () => {
    render(<PhraseCard phrase={phrase} onDelete={mockDelete} />)
    expect(screen.getByText("Frase de prueba")).toBeInTheDocument()
  })

  it("debe llamar a onDelete al hacer click en el botón", () => {
    render(<PhraseCard phrase={phrase} onDelete={mockDelete} />)
    const button = screen.getByRole("button", { name: /eliminar frase/i })
    fireEvent.click(button)
    expect(mockDelete).toHaveBeenCalled()
  })
})