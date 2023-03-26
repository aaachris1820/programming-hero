import { useEffect, useState } from 'react'
import a from './assets/users'
import './App.css'
import User from './components/User';
import { getOrSetLocalStorage } from './utilitites/utilities-function';

function App() {
const [users,setUsers]=useState(a);

  useEffect(()=>{
console.log(users);
getOrSetLocalStorage();
  },[])

  return (
    <div className="App">
      <h1 style={{textAlign:"center",margin:"50px,0px"}}>Users</h1>

      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',margin:"16px 50px",gap:"24px"}}>

        {users.map(user=>{
         return <User key={user.id} name={user.name} id={user.id} age={user.age} ></User>
        })}
      </div>
    </div>
  )
}

export default App
