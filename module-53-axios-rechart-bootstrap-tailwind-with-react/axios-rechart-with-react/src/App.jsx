import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'
import ChartPhonePrice from './components/ChartPhonePrice';

function App() {
  const [phones,setPhones]=useState([]);

  useEffect(()=>{
    const loadData=async()=>{
      let data=await axios.get("https://openapi.programming-hero.com/api/phones?search=iphone");
      setPhones(data.data.data);
    }
    loadData();
  },[])
  console.log(phones);

  return (
   <>
   <h1 className='w-75 mx-auto my-5 text-center '>hello</h1>
   <ChartPhonePrice data={phones}></ChartPhonePrice>
   </>
  )
}

export default App
