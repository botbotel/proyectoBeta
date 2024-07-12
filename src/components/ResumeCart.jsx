import { ToastContainer, toast } from 'react-toastify';
import cart from '../assets/card.png'
import { Bounce } from "react-toastify";
import deleteIcon from '../assets/icons8-delete-16.png';
import "../components/ResumeCart.css";
import 'react-toastify/dist/ReactToastify.min.css';


    {/* COMPONENTE RECIBE ARRAY DE @cartItems */ }
const ResumeCart = ({ cartItems, removeFromCart }) => {

  const token = sessionStorage.getItem('authToken') 


  {/* @resumePrice MUESTRA EL TOTAL DE LA SUMA DE PRECIOS DEL CARRITO */ }
  const resumePrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)
  }

  {/* 
    @pay REALIZA LA SIMULACIÓN DE PASARELA DE PAGO
    SI EL CARRITO TIENE ITEMS MUESTRA EL TOTAL EN UN ALERT 
    EN CASO DE ESTAR VACÍO MUESTRA QUE NO HAY ITEMS
    */ }
  const pay = () => {
    setTimeout(()=>{
      if(token) {
        toast(`🦄 Has pagado ${resumePrice()}€ it's MAGIC!!`, {position: "bottom-right", pauseOnHover: false});
      } else {
        toast(`🦄 Logeate para terminar de comprar`, {position: "bottom-right", pauseOnHover: false});
        this.props.history.push('/login')
      }
    },1000)
  }
  return (
    <div className="d-flex justify-content-between align-items-center">


      {/* TABLA RESUMEN CARRO */ }
      <div className="cartResume">
        <table className="tableResume"> 
          <thead>
            <tr className="tabHeader">
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <th>{item.name}</th>
                <th>{item.price}.00€</th>
                <th onClick={removeFromCart}><img src={deleteIcon} id='closeIcon'/></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* SECCIÓN RESUMEN 
          TODO: PASARELA DE PAGO EN BOTON
        */ }
      <div className="CheckOut">
        <h3>Check out</h3>
        <p id="resumePrice">Resume price: {resumePrice()} €</p>
        <button id="checkOutBtn" onClick={pay}> Pay 
          <img src={cart} id="cart" />
        </button>
        <ToastContainer/>
      </div>
    </div>
  );
}

export default ResumeCart;
