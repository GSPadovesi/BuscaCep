import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from './pages/main/Index'
import { Navbar } from './components/navbar/Index'
import { Footer } from './components/footer/Index'
import './App.css'
import { Post } from './pages/post/Index'

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/post/:id" element={<Post />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
