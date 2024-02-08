import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TheameProvider } from './contexts/theame'
import { useEffect } from 'react'
import ThemeBtn from './components/TheameBtn'
import Card from './components/Card'
function App() {
  const [theameMode,setTheameMode]=useState("light")
  const lightMode=()=>{
    setTheameMode("light")
  }
  const darkMode=()=>{
    setTheameMode("dark")
  }

  useEffect(()=>{
     const html=document.querySelector('html');
     html.classList.remove("light" ,"dark")
     html.classList.add(theameMode)
  },[theameMode])

  return (

    <TheameProvider value={{theameMode,darkMode,lightMode}}>
         <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
               <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
            <Card/>
            </div>
        </div>
    </div>
    </TheameProvider>

  )
}

export default App
