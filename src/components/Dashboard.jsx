import firebase from 'firebase/compat/app';
import Calendario from './Calendario'
import { getAuth, updateCurrentUser, updateProfile, updateEmail, verifyBeforeUpdateEmail, updatePassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import './Dashboard.css'

const Dashboard = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const token = sessionStorage.getItem("authToken")

  const auth = getAuth()
  const user = auth.currentUser;


  // ACTUALIZA EL NOMBRE DE USUARIO 
  const updateName = () => {
    try {
      updateProfile(user, {
        displayName: `${name}`
      })
      user.reload()
    } catch(error) {
      console.log(error)
    }
  }

  //ACTUALIZA CORREO ELECTRONICO DE USUARIO
  const updateAdress = () => {
    try {
      updateEmail(user, `${email}`).then(() => { console.log("Email updated") })
      verifyBeforeUpdateEmail(user, email).then(() => { toast(`🦄 Verifica en tu email ${email} para completar`, { position: "bottom-right", pauseOnHover: false });  })
  }catch(error) {
    toast(`🦄 Verifica en tu email ${email} para completar`, { position: "bottom-right", pauseOnHover: false }); 
    }
  }

  //ACTUALIZA CONTRASEÑA DE USUARIO
  const resetPass = () => {
    updatePassword(user, password)
  .then(() => {
    toast(`🦄 Contraseña cambiada!`, { position: "bottom-right", pauseOnHover: false });
  })
  .catch((error) => {
      console.log(error)
  });
  }

  // BORRA USUARIO
  const deleteUser = () => {
    user.delete(user.uid)
    .then(()=> {
      toast(`🦄 Usuario borrado correctamente`, { position: "bottom-right", pauseOnHover: false });
      sessionStorage.removeItem('authToken')
      setTimeout(()=> {
        location.reload()
        location.href = "/home"
      },5000)
    })
  }

  return (
    <>

    <div className='namePanel text-md-center m-3'>
      <img src={user.photoURL} alt="UserPhoto"/>
      <h1>{user.displayName}</h1>
      <h2>{user.email}</h2>
    </div>

    <div className='editUser d-flex flex-lg-row justify-content-lg-around'>
      <div className='d-fex align-items-center'>
        <input type="text" placeholder='Update user name' className='m-3 p-2' value={name} onChange={(e)=> setName(e.target.value)}/>
        <button onClick={updateName}> Update</button>
      </div>
      <div className='d-fex align-items-center'>
        <input type="text" placeholder='Update email' className='m-3 p-2' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <button onClick={updateAdress}> Update</button>
        <ToastContainer/>
      </div>
      <div className='d-fex align-items-center'>
        <input type="text" placeholder='New password' className='m-3 p-2' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={resetPass}> Update</button>
        <ToastContainer/>
      </div>
    </div>

      <div className='d-flex align-items-lg-center justify-content-center' id='deleteContainer'>
        <button id='deleteUser' onClick={deleteUser}>Borrar usuario</button>
        <ToastContainer/>
      </div>

      
    <hr id='horizontal'/>

    </>
  )
}


export default Dashboard
