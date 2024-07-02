import './Login.css'
import 'firebase/auth'

import { Link } from 'react-router-dom'

const Login = () => {

        {/* 
          TODO: LOGIN CON FIREBASE 
          */ }

  return (
    <div className=" container d-flex flex-column align-items-center justify-content-center">
      <h1>Login in</h1>
      <div className="inputs">
        <input placeholder="Email"/>
        <input placeholder="Password"/>
      </div>
      <button>Vamos!</button>
      <Link to="/register">
        <h5 id='register'>¿Aún no estás registrado?</h5>
      </Link>
    </div>
  )
}

export default Login

