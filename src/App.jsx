import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ShoppingCart from './assets/icons8-carrito-de-compras-50.png';
import Home from './components/Home';
import Login from './components/Login';
import Packages from './components/Packages';
import Register from './components/Register';
import ResumeCart from './components/ResumeCart';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import firebaseConfig from './firebase/firebaseConfig';
import Dashboard from './components/Dashboard';

function App() {

  const token = sessionStorage.getItem('authToken') 

  // Elimina el Token al hacer SingOut
  const removeToken = () => {
    sessionStorage.removeItem('authToken')
    location.reload()
    location.href = "/home"
  }


  const [cartItems, setCartItems] = useState([]);

  // Nº Carrito
  const cartCount = cartItems.length;

  // Add item to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Remove item from cart
  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <>
      <header className='d-flex justify-content-between align-items-center p-4'>
        <h1>LOGO</h1>
        <nav>
          <ul className='d-flex flex-row justify-content-around'>
            <li className='p-4'><Link to="/home">Home</Link></li>
            <li className='p-4'><Link to="/packages">Packages</Link></li>
            <li className='p-4'><Link to="/login">Login</Link></li>
            {token ? <li className='p-4'><Link to="/dashboard">Dashboard</Link></li>:""}
            {token ? <li className='p-4' onClick={removeToken}> Sing Out </li>:""}
            <li className='p-4'>
              <Link to="/resumeCart">
                <img src={ShoppingCart} alt="ShoppingCart" className='m-1'/>{cartCount}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/packages' element={<Packages addToCart={addToCart}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/resumeCart' element={<ResumeCart cartItems={cartItems} removeFromCart={removeFromCart}/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
