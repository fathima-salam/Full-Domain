




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

