import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import AddPage from './Pages/AddPage'
import Home from './Pages/Home'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddPage />} />
          </Route>


        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
