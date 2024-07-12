import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import noPhoto from '../assets/Avatar-PNG-Image.png'
import './Dashboard.css'

const Dashboard = () => {

  const token = sessionStorage.getItem("authToken")

  const auth = getAuth()
  const user = auth.currentUser;

  return (
    <>

    <div className='namePanel text-md-center m-3'>
      <img src={noPhoto}/>
      <h1>{user.displayName}</h1>
      <h4>{user.email}</h4>
    </div>

    </>
  )
}

export default Dashboard
