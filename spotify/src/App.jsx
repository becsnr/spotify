import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Artista from "./pages/Artista"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/artista/:id" element={<Artista />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
