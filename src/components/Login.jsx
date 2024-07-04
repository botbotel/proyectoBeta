import './Login.css'
import 'firebase/auth'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const singIn = async (e) => {
    e.preventDefault()
    const auth = getAuth()
    await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      toast('🦄 Login correcto', {position: "bottom-right", pauseOnHover: false});
      setEmail("")
      setPassword("")
    })
    .catch((error)=> {
      toast('🦄 Oooh, incorrecto', {position: "bottom-right", pauseOnHover: false});
      setEmail("")
      setPassword("")
    })
  }

  return (
    <div className=" container d-flex flex-column align-items-center justify-content-center">
      <h1>Login in</h1>
      <div className="inputs">
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={singIn}>Vamos!</button>
      <ToastContainer/>
      <Link to="/register">
        <h5 id='register'>¿Aún no estás registrado?</h5>
      </Link>
    </div>
  )
}

export default Login

