import React, { useEffect, useState } from 'react';

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadData = async() => {
      const res=await fetch('http://localhost:3000/users');
      const data=await res.json();
      setUsers(data);
    }
    loadData();
  }, [])

  const handleSubmit = async(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;

    const newUser = {name,password};
    
    const res=await fetch('http://localhost:3000/users',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
    });
    const data=await res.json();
    setUsers(data)
  }

  return (
    <div>
      <h1 className='text-center py-6 text-5xl'>Node js & Express js</h1>

      <form onSubmit={handleSubmit} className='w-10/12 mx-auto p-8 border rounded-md my-10 flex flex-col gap-y-2'>
        <label htmlFor="name">Your User name</label>
        <input name='name' type="text" className='border p-2' />

        <label htmlFor="password">password</label>
        <input name='password' type="password" className='border p-2' />

        <button type="submit" className='px-6 py-2 bg-blue-500 rounded-lg w-32 mx-auto text-white font-bold mt-6'>Submit</button>
      </form>

      <div className='w-10/12 mx-auto flex flex-col gap-4'>
        <h1>Total users : {users.length}</h1>
        {users.map(user=> <p key={user.id}>{user.id}. {user.name} </p> )}
      </div>
    </div>
  );
};

export default App;