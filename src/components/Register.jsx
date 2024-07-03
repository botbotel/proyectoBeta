import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from 'firebase/compat/app'
import appFirebase from '../firebase/firebaseConfig'
import { initializeApp } from 'firebase/app';

      {/* 
        TODO: REGISTRO CON AUTENTICACION FIREBASE 
        */ }

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    const auth = getAuth()
    createUserWithEmailAndPassword(auth,email,password)
    .then(() => {
      alert('Regsitrado correctamente')
    })
  } 

  return (
    <div className=" container d-flex flex-column align-items-center justify-content-center">
      <h1>Sign in</h1>
      <div className="inputs">
        <input placeholder="Email"value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={submit}>Registrarse</button>
    </div>
  );
};

export default Register;
