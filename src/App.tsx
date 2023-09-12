import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from './pages/main/Index'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/post/:id" element={<Quiz />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
