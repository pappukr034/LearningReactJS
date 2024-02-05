import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counterVal,setCounterval]=useState(0);
  const addVal=()=>{
    counterVal++;
    if(counterVal<=20){
      // setCounterval(counterVal)
      // setCounterval(counterVal)
      // setCounterval(counterVal)
      setCounterval(prevCounter => (prevCounter+1))
      setCounterval(prevCounter => (prevCounter+1))
    }
  }
  const removeVal=()=>{
    counterVal--;
    if(counterVal>=0){
      setCounterval(counterVal)
    }
  }
  return (
    <>
     <h1>Counter App : First Project</h1>
     <br />
     <h2>counter Value : {counterVal}</h2>
     <br />
     <button onClick={addVal}>Increase : {counterVal}</button>
     <button onClick={removeVal}>Decrease : {counterVal}</button>
     <footer>Footer : {counterVal}</footer>
    </>
  )
}

export default App
