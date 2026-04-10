import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Artista from "./pages/Artista"
import Playlist from "./pages/Playlist"
import Album from "./pages/Album"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="/artista/:id" element={<Artista />} />
            <Route path="/album/:id" element={<Album />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
