import { Outlet,Link } from 'react-router-dom'
import Home from './components/Home'
import './App.css'

function App() {


  return (
    <>
    <nav className='w-11/12 mx-auto my-5 flex flex-wrap text-3xl gap-6 font-bold justify-around'>
      <Link to={"/"} className='shadow-md'>Home</Link>
      <Link to={'countries'} className='text-red-500   font-bold shadow-md'>React Router <span className='text-blue-500'> - Rest Countries</span></Link>
      
    </nav>
    
    
    <Outlet>

    </Outlet>


    </>
  )
}

export default App
