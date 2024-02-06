import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css' 

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password,setPassword]=useState("");

  const passwordRef=useRef(null)

  const generateRandomPassword=useCallback(()=>{
     let pass="";
     let str="tuvwxyzGHIJKLMNOPQRSTUVWXYZabcdefhgijklmnopqrstuvwxyzABCDEF";
     if(numberAllowed) str+="0123456789"
     if(charAllowed) str+="~!@#$%^&*(){}<>?"
     for(let i=1;i<=length;i++){
       let char=Math.floor(Math.random()*length+1);
       pass+=str.charAt(char);
     }
     setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword]);

  const copyToClipBoard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    generateRandomPassword()
  },[length,setnumberAllowed,setcharAllowed,generateRandomPassword])

  return (
    <>
     <div className=' w-full bg-slate-900 text-orange-500 h-screen overflow-hidden'>
       <h1 className=' font-bold backdrop-blur-2 mt-10 text-5xl'>Random Password Generator</h1>
       <span className=' font-bold text-8xl text-red-600'>♥</span>
       <hr className=' w-full mt-2' />
       <div className=' w-full bg-slate-950 p-4'>
          <input
           type="text"
           placeholder='Password'
           value={password}
           ref={passwordRef}
           className='mt-10 w-[50%] h-[50px] p-2 rounded-md px-4'
           readOnly
          />
          <button onClick={copyToClipBoard} className='mt-10 h-[50px] p-2 rounded-md px-4  text-white bg-orange-500 font-semibold outline-none'>copy</button>
       </div>

       <div className='flex justify-center items-center mt-10 gap-5 '>
          <div className='flex justify-center items-center gap-4 text-2xl'>
                <input 
                type="range"
                value={length}
                min={8}
                max={100}
                className=' cursor-pointer'
                onChange={(e)=>{setLength(e.target.value)}}
                />
                <label htmlFor="">Set Lenght : {length}</label>
          </div>
          <div className='flex justify-center items-center gap-4 text-2xl'>
               <input type="checkbox"
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={()=>{
                  setnumberAllowed((prev)=> !prev) 
                }}
                />
                <label htmlFor="numberInput">Include number</label>
          </div>
          <div className='flex justify-center items-center gap-4 text-2xl'>
               <input type="checkbox"
                defaultChecked={charAllowed}
                id='characterInput'
                onChange={()=>{
                  setcharAllowed((prev)=> !prev) 
                }}
                />
                <label htmlFor="characterInput">Include character</label>
          </div>
       </div>
     </div>
    </>
  )
}

export default App
