// Create a Greeting component that accepts name and isLoggedIn props. If isLoggedIn is true show Hello, {name},
//  otherwise show Please log in. Use default prop for name as "Guest".

import React from 'react'
import { useState } from 'react'
const Greeting = ({name= 'guest',isLoggedIn})=>{
  return (
    <>
    <h3>{isLoggedIn ? `Hello ${name}` : 'please Log in'}</h3>
    </>
  )
}

const App = () => {
  const [isLoggedIn , setIsLoggedin] = useState(false);
  const name = 'fathima'
  return (
    <div>
      <button onClick={()=>setIsLoggedin(isLoggedIn ? false :true)}>{isLoggedIn ? 'log out' : 'log in'}</button>
      <Greeting name={name} isLoggedIn={isLoggedIn}/>
    </div>
  )
}

export default App




// ** DYNAMIC RENDEARING **
// ---------------------------------
// ---------------------------------

// import React from 'react'
// import { useState } from 'react';

const App = () => {
  let fruits = ['apple' , 'orange' , "mango" ,'pineapple' , 'watermelon' , 'kiwi'];
  const [showdata , setShowData] = useState(false);
  return (
    <div>
      <button onClick={()=>setShowData(showdata ? false : true)}>{showdata ? "hide Data":'Show List'}</button>
      { showdata ? (
        <ul>
        {fruits.map((x,i)=>
          (<li key={i}><h1 >{x}</h1></li>)
          
        )}
        </ul>
        
      ): 'No Products Available'
      }
    </div>
  )
}

export default App

