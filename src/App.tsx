import { PhraseProvider } from "./context/PhraseContext"
import { Home } from "./pages/Home"

function App() {
  return (
    <PhraseProvider>
      <Home />
    </PhraseProvider>
  )
}

export default App
