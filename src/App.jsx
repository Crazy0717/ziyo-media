import { Route, Routes } from "react-router-dom"
import {
  Articles,
  Audios,
  Categories,
  Contacts,
  Home,
  Leadership,
  Messages,
  News,
  Photos,
  Product,
} from "./pages"
import { Footer, Nav } from "./components"
import { Background } from "./ui"

function App() {
  return (
    <div id="app">
      <Background />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/new-added" element={<News />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/categories/:category" element={<Categories />} />
        <Route path="/audios" element={<Audios />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
