import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ShoppingCart from './assets/icons8-carrito-de-compras-50.png'
import Home from './components/Home'
import Login from './components/Login'
import Packages from './components/Packages'
import Register from './components/Register'
import ResumeCart from './components/ResumeCart'
import { Route, Routes, Link} from 'react-router-dom'
import { useState } from 'react'
import firebaseConfig from './firebase/firebaseConfig'



function App() {

  const [cartItems,setCartItems] = useState([])

  {/* VARIABLE-CONTADOR PARA MARCAR CANTIDAD DE ITEMS EN @CartItems DESDE NAVBAR */ }
  const [cartCount, setCartCount] = useState(0)

  {/* @addToCart RECIBE ITEM DE COMPONENTE @ShoppingCart Y LO INCLUYE EN ARRAY DE @CartItems */ }
  const addToCart = (item) => {
    setCartItems([...cartItems, item])
    setCartCount(cartItems.length +1)
  }


  return (
    <>
      {/* PARTE DE NAVBAR DE APP */ }
      <header className='d-flex justify-content-between align-items-center p-4'>
        <h1>LOGO</h1>
        <nav>
          <ul className='d-flex flex-row justify-content-around'>
            <li className='p-4'><Link to="/home">Home</Link></li>
            <li className='p-4'><Link to="/packages">Packages</Link></li>
            <li className='p-4'><Link to="/login">Login</Link></li>
            
            {/* SECCION CARRITO EN NAVBAR */ }
            <li className='p-4'>
              <Link to="/resumeCart">
                <img src={ShoppingCart} alt="ShoppingCart" className='m-1'/>{cartCount}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* RUTAS GENERALES DE APLICACIÓN CON PROPS HACIA CADA COMPONENTE HIJO */ }
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/packages' element={<Packages addToCart={addToCart}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/resumeCart' element={<ResumeCart cartItems={cartItems}/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
