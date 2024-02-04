import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './header.jsx'

function MyApp(){
  return(
    <div>
      <h1>MyApp inside main.jsx</h1>
    </div>
  );
}

// const ReactElement={
//   type:'a',
//   props:{
//       href:"https://google.com",
//       target:"_blank"
//   },
//   children:"Go to GOOGLE"
// }

const anotherElement=(
   <a href="https://google.com" target='_main'>Go to amazon</a>
)

const thirdElement=React.createElement(
  'a',
  {
    href:"https://google.com",
    target:"_main"
  },
  "Visit Amazon"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <App />
  </>
)
