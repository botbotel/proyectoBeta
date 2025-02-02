import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    const auth = getAuth()
    createUserWithEmailAndPassword(auth,email,password)

    .then(() => {
      toast('🦄 Registrado correctamente', {position: "bottom-right", pauseOnHover: false});
        setEmail("")
        setPassword("")
    }).catch((error) => {
      toast(`🦄 Parece que ${email} ya está en uso`, {position: "bottom-right", pauseOnHover: false});
        setEmail("")
        setPassword("")
    })
  }

  return (
    <div className=" container d-flex flex-column align-items-center justify-content-center">
      <h1>Sign in</h1>
      <div className="inputs">
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={submit}>Registrarse</button>
      <ToastContainer/>
    </div>
  );

};

export default Register;
