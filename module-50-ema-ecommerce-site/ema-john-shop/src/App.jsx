import Header from './Header';
import Products from './Products';
import './App.css'
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default App
