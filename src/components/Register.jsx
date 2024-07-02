import 'firebase/auth'
import { useState } from 'react';
import appFirebase from '../firebase/firebaseConfig'
import {onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


      {/* 
        TODO: REGISTRO CON AUTENTICACION FIREBASE 
        */ }


const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    const correo = e.target.email.value
    const pass = e.target.password.value
    setEmail(correo)
    setPassword(pass)
    console.log(email, password)
  }

  return (
    <div className=" container d-flex flex-column align-items-center justify-content-center">
      <h1>Sign in</h1>
      <div className="inputs">
        <input placeholder="Email" id='email'/>
        <input placeholder="Password" id='password'/>
      </div>
      <button onClick={submit}>Registrarse</button>
    </div>
  );
};

export default Register;
