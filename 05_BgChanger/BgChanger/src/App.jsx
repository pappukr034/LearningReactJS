import { useState } from 'react'
import './App.css'
import ButtonContainer from './ButtonContainer'
function App() {
    const [color,setColor]=useState("red");
  return (
    <div id="bg-comtainer" className='w-full h-screen ' style={{backgroundColor:color}}>
      < ButtonContainer />
    </div>
  )
}

export default App
