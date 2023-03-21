import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users,setUsers]=useState([]);
  useEffect(() => {
/*    const loadData= async ()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    setUsers(data);
   }
   loadData(); */
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=>res.json())
   .then(data=>setUsers(data))
  },[])
  return (<>

      {users.map(user=> 
      <User key={user.id} name={user.name} email={user.email} phone={user.phone}></User>)}

  </>

  )
}

function User(props){

  return <div style={{border: "2px red solid",margin:"16px",padding:"16px", borderRadius:"14px"}}>
      <h1>Name:{props.name}</h1>
      <p>Email:{props.email}</p>
      <p>Phone: {props.phone}</p>
  </div>
  }

export default App
