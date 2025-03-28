import { render, screen, fireEvent } from "@testing-library/react"
import PhraseForm from "../PhraseForm"
import { useState } from "react"

const Wrapper = ({ onAdd }: { onAdd: () => Promise<void> }) => {
  const [text, setText] = useState("")
  return <PhraseForm text={text} setText={setText} onAdd={onAdd} />
}

describe("PhraseForm", () => {
  let mockAdd: jest.Mock

  beforeEach(() => {
    mockAdd = jest.fn(() => Promise.resolve())
  })

  it("debe agregar una frase válida al hacer submit", () => {
    render(<Wrapper onAdd={mockAdd} />)

    const input = screen.getByPlaceholderText("Escribí una frase") as HTMLInputElement
    const button = screen.getByRole("button", { name: /agregar/i })

    fireEvent.change(input, { target: { value: "Hola" } })
    fireEvent.click(button)

    expect(mockAdd).toHaveBeenCalledTimes(1)
  })

  it("no debe agregar una frase vacía", () => {
    render(<Wrapper onAdd={mockAdd} />)

    const button = screen.getByRole("button", { name: /agregar/i })
    fireEvent.click(button)

    expect(mockAdd).not.toHaveBeenCalled()
  })

})
