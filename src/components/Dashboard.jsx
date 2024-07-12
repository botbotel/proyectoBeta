import firebase from 'firebase/compat/app';
import { getAuth, updateCurrentUser, updateProfile } from 'firebase/auth';
import noPhoto from '../assets/Avatar-PNG-Image.png'
import './Dashboard.css'
import { useState } from 'react';

const Dashboard = () => {

  const [name, setName] = useState("")
  const token = sessionStorage.getItem("authToken")

  const auth = getAuth()
  const user = auth.currentUser;

  const updateName = () => {
    try {
      updateProfile(user, {
        displayName: `${name}`
      })
    } catch(error) {
      console.log(error)
    }

  }

  return (
    <>

    <div className='namePanel text-md-center m-3'>
      <img src={noPhoto}/>
      <h1>{user.displayName}</h1>
      <h4>{user.email}</h4>
    </div>

    <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>
    <button onClick={updateName}>Actualizar</button>
    </>
  )
}

export default Dashboard
