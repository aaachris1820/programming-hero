import React, { useContext, useEffect, useState } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { AuthContext } from './components/contexts/AuthContextWrapper';
import PrivateHeader from './components/privateForUsers/PrivateHeader';

const App = () => {
  const {user}=useContext(AuthContext);
  const [currentUser,setCurrenUser]=useState(user);
  useEffect(()=>{
    setCurrenUser(user);
  },[user])
  return (
<>
{currentUser?<PrivateHeader setCurrenUser={setCurrenUser}></PrivateHeader>: <Header/>}
<Outlet></Outlet>
</>
  );
};

export default App;