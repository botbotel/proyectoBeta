import { getAuth, signInWithEmailAndPassword, updateCurrentUser, updateProfile } from 'firebase/auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import noPhoto from "../assets/Avatar-PNG-Image.png"
import 'react-toastify/dist/ReactToastify.min.css';
import './Login.css'
import firebase from 'firebase/compat/app';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const singIn = async (e) => {
    e.preventDefault()
    const auth = getAuth()
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      updateProfile(user, {
        displayName: `${user.email}`, photoURL: `${noPhoto}`
      })
      const tokenUID = await user.getIdToken();

      sessionStorage.setItem('authToken', tokenUID)


      toast('🦄 Login correcto, EL PODER DEL PUTICORNIO ES TUYO', { position: "bottom-right", pauseOnHover: false });
      setEmail('');
      setPassword('');
      setTimeout(()=> {location.reload()},5000)
    } catch (error) {
      toast(`🦄 Error en el login, revisalo todo`, { position: "bottom-right", pauseOnHover: false });
    }
  };

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

