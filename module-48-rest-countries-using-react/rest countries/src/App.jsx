import { useEffect, useState } from 'react'
import Countries from './countries/Countries';
import './App.css'

function App() {
  const [countries,setCountries]=useState([]);
  useEffect(()=>{
    const loadData=async()=>{
      const res=await fetch("https://restcountries.com/v3.1/all");
      const data= await res.json();
      setCountries(data);
    }
    loadData();
  },[])
  console.log(countries)
  return (
    <div className="App">
      <h1 style={{textAlign:"center",fontSize:"48px",marginBottom:"50px"}}>All the countries in the world - {countries.length}</h1>
      <Countries data={countries}></Countries>
    </div>
  )
}

export default App
