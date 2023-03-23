import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(100)

  return (
    <div className="App">
      <p>Press the button to decrease charge</p>
      <p>Battery charge:<span>{count}</span></p>
      <button onClick={()=>setCount(state=>state>=10?state-10:state)}>press to decrease</button>
    </div>
  )
}

export default App
