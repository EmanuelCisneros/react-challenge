import { act } from "react-dom/test-utils"
import { usePhraseStore } from "../../store/usePhraseStore"

// Mock correcto de crypto.randomUUID para Jest + TypeScript
beforeAll(() => {
  Object.defineProperty(global, "crypto", {
    value: {
      randomUUID: () => "00000000-0000-0000-0000-000000000000"
    },
    writable: true,
  })
})

describe("usePhraseStore (Zustand)", () => {
  beforeEach(() => {
    act(() => {
      usePhraseStore.getState().phrases = []
    })
    localStorage.clear()
  })

  it("debe agregar una frase", () => {
    act(() => {
      usePhraseStore.getState().addPhrase("Hola")
    })

    const phrases = usePhraseStore.getState().phrases
    expect(phrases).toHaveLength(1)
    expect(phrases[0].text).toBe("Hola")
  })

  it("debe eliminar una frase por id", () => {
    let id: string = ""

    act(() => {
      usePhraseStore.getState().addPhrase("Para borrar")
      id = usePhraseStore.getState().phrases[0].id
      usePhraseStore.getState().removePhrase(id)
    })

    const phrases = usePhraseStore.getState().phrases
    expect(phrases).toHaveLength(0)
  })

  it("debe persistir frases en el storage", () => {
    act(() => {
      usePhraseStore.getState().addPhrase("Persistente")
    })

    const stored = localStorage.getItem("phrases-storage")
    expect(stored).toContain("Persistente")
  })
})