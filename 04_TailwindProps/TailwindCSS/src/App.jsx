import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Card"
function App() {

  return (
    <>
     <h1 className='bg-orange-600 border-spacing-2 rounded-md p-3 font-semibold text-stone-50 mb-3'>Tailwind in React JS</h1>
     {/* We copy a card from UI.dev */}
     <Card cardTitle="Pappu Kumar" myObj={{username:"pappu",email:"papukr034@gmail.com"}} btnType="Book now" />
     <Card cardTitle="Amit Kumar" btnType="Buy Now" />
     <Card cardTitle="Ravi Kishan" btnType='Download' />
    </>
  )
}

export default App
