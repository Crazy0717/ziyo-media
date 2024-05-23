import { Route, Routes } from "react-router-dom"
import { Home } from "./pages"
import { Nav } from "./components"
import { Background } from "./ui"

function App() {
  return (
    <div id="app">
      <Background />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
