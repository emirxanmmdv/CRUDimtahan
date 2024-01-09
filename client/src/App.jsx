import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import AddPage from './Pages/AddPage'
import Home from './Pages/Home'
import Products from './Layout/Products'
import Wishlist from './Layout/Wishlist'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddPage />} />
            <Route path='/products' element={<Products/>} />
            <Route path='/wishlist' element={<Wishlist/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
