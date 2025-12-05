import React from 'react'

const arr = ['fathima','ajmiya','junaidh'];

const App = () => {
  return (
    <div>
        <ul>
            {
                arr.map((x,i)=>{
                    return <li key={i}>{x}</li>
                })
            }
        </ul>
    </div>
  )
}

export default App




// import React, { useRef } from 'react'

// const App = () => {
//     const colourRef = useRef('red');
//     const handleCLick = ()=>{
//         colourRef.current.styles.color = 'green';
//     }

//   return (
//     <div>
//         <h1>Hello world</h1>
//         <button onClick={handleCLick}>change color</button>
//     </div>
//   )
// }

// export default App
































// import React, { useMemo } from 'react'

// const App = () => {

//     const expensiveCalculation = useMemo(()=>{
//         let total=0;
//         for(let i=0;i<1000;i++){
//             total+=1;
//         }
//         return total;
//     },[])
//   return (
//     <div>
//         <h1>total : {expensiveCalculation}</h1>
//     </div>
//   )
// }

// export default App






// import React, { useCallback, useState } from 'react'

// const Button = ({onClick})=>{
//     console.log('button rendered');
//     return <button onClick={onClick}>increment</button>
// }

// const App = () => {
//     const [count,setCount] = useState(0);
//     const increment = useCallback(()=>{
//         setCount(prev =>prev+1);
//     },[])
//   return (
//     <div>
//         <h1>{count}</h1>
//         <Button onClick={increment}/>
//     </div>
//   )
// }

// export default App




// import React, { useReducer, useState } from 'react'

// const App = () => {
//     function reducers(state,action){
//         switch(action.type){
//             case 'INCREMENT' : return {count : state.count +1};
//             case 'DECREMENT' : return {count : state.count -1};
//             case 'RESET' : return {count :0};
//             default : return count;
//         }
//     }
//     const [state,dispatch] = useReducer(reducers,{count:0})
//   return (
//     <div>
//         <h2>count : {state.count}</h2>
//         <button onClick={()=>dispatch({type:'INCREMENT'})}>increment</button>
//         <button onClick={()=>dispatch({type:'DECREMENT'})}>decrement</button>
//         <button onClick={()=>dispatch({type:'RESET'})}>reset</button>
//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const App = () => {
//     const [count,setData] = useState(0)
//     const [running,setRunning] = useState(false)
//     useEffect(()=>{
//         let timer;
//         if(running){
//             timer = setInterval(()=>{
//                 setData(prev=>prev+1)
//             },1000)
            
//         return ()=>clearInterval(timer);
//         }
//     },[running])
//   return (
//     <div>
//         <h3>count:{count}</h3>
//         <button onClick={()=>setRunning(true)}>Start</button>
//         <button onClick={()=>setRunning(false)}>Stop</button>
//         <button onClick={()=>setData(0)}>Reset</button>
//     </div>
//   )
// }

// export default App
// import React, { useEffect, useState } from 'react'

// const App = () => {
//     const [data,setData] = useState({});
//     useEffect(()=>{
//         fetch('https://dummyjson.com/products')
//         .then((response)=>{
//             if(!response.ok){
//                 throw new Error('Network Error');
//             }
//             return response.json();
//         }).then((response)=>{
//             setData(response)
//         }).catch((error)=>{
//             console.log(error);
//         })
//     },[]);

//   return (
//     <div>
//         <h1>{JSON.stringify(data)}</h1>
//     </div>
//   )
// }

// export default App




// import React, { forwardRef, useRef } from 'react'

// const App = () => {
//     const inputRef = useRef(null);
//     function inputFocus(){
//         inputRef.current.focus();
//     }
//   return (
//     <div>
//         <Child ref={inputRef}/>
//         <button onClick={inputFocus}>Click Here</button>
//     </div>
//   )
// }

// const Child = forwardRef((props,ref)=>{
//     return <input ref={ref} type="text" placeholder='Type here' />
// })

// export default App
// import React, { useState } from 'react'

// const App = () => {
//     const [name,setName] = useState('');
//   return (
//     <div>
//         <Home name={name}/>
//         <ProfileSettings setName={setName}/>
//     </div>
//   )
// }

// const Home = ({name})=>{
//     return (
//         <>
//         <h1>{name}</h1>
//         </>
//     )
// }

// const ProfileSettings = ({setName}) =>{
//     let name ='fathima';
//     const handleClick = (name)=>{
//         setName(name)
//     }
//     return (
//         <>
//         <button onClick={handleClick}>Set Name</button>
//         </>
//     )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//     const [name,setName] = useState('');
//     function propnameSetting(name){
//         setName(name)
//     }
//   return (
//     <div>
//         <Child namedFunc={propnameSetting}/>
//         <h1>{name}</h1>
//     </div>
//   )
// }

// const Child = (props)=>{
//     let name= 'fathima'
//     function handleClick(){
//         props.namedFunc(name)
//     } 
//     return (
//         <>
//         <button onClick={handleClick}>ClickHere</button>
//         </>
//     )
// }
// export default App



// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//     const [name,setName] = useState('')
//     const propFromChild = (name)=>{
//         setName(name)
//     }
//   return (
//     <div>
//         <h1>{name}</h1>
//         <Child namedfunc={propFromChild}/>
//     </div>
//   )
// }

// export default App


// const Child = (props)=>{
//     let name ='fathima'
//     function handleClick(){
//         props.namedfunc(name);
//     }
//     return(
//         <>
//         <button onClick={handleClick}>click here</button>
//         </>
//     )
// }












// import React, { useState } from 'react'

// const App = () => {
//     const [data,setData] = useState({});
//     useState(()=>{
//         fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>{
//             if(!response.ok){
//                 throw new Error('something went wrong');
//             }
//             return response.json();
//         }).then((data=>{
//             setData(data)
//         })).catch((error=>{
//             console.log(error);
//         }))
//     })
//   return (
//     <div>{JSON.stringify(data.title)}</div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'

// const App = () => {
//     const [count,setCount] = useState(0);
//     const [running,setRunning] = useState(0);

//     useEffect(()=>{
//         let interval ;
//         if(running)
//         interval = setInterval(()=>{
//            setCount((prev)=>prev+1);
//         },1000)

//         return ()=>{
//             clearInterval(interval)
//         }
//     },[running])
//     const startCounter = () =>{
//         setRunning(true);
//     }
//     const stopCounter = () =>{
//         setRunning(false);
//     }
//     const resetCounter = () => {
//         setCount(0);
//         setRunning(false)
//     }
//   return (
//     <div>
//         <h1>Count : {count}</h1>
//         <button onClick={startCounter}>Start</button>
//         <button onClick={stopCounter}>Stop</button>
//         <button onClick={resetCounter}>Reset</button>
//     </div>
//   )
// }

// export default App

// import React, { useCallback, useState } from 'react'

// const ClickedFunction = React.memo(({handleClick})=>{
//     console.log('button rendered')
//     return <button onClick={handleClick}>Click</button>  
// })

// const App = () => {
//     const [count,setCount] = useState(0)
//     const handleClick = useCallback(()=>{
//         console.log('button clicked')
//     })
//   return (
//     <div>
//         <button onClick={()=>setCount(count+1)}>counter</button>
//         <ClickedFunction handleClick={handleClick}/>
//     </div>
//   )
// }

// export default App


// const Home = React.lazy (()=>import('./Home.jsx'));



// useReducer


// import React, { useReducer } from 'react'

// function reducer(state,action){
//   switch(action.type){
//     case "increment" : return state.count + 1;
//     case "decrement" : return state.count - 1;
//     case "reset" : return state.count = 0;
//     default :
//     return state;
//   }
// }

// const App = () => {
//   const [state,dispatch] = useReducer(reducer,{count:0})
//   return (
//     <div>
//       <h4>count : {state.count}</h4>
//       <button onClick={()=>dispatch({type : "increment"})}>increment</button>
//       <button onClick={()=>dispatch({type : "decrement"})}>decrement</button>
//       <button onClick={()=>dispatch({type : "reset"})}>reset</button>
//     </div>
//   )
// }

// export default App


// prop lifting



// import React, { useState } from 'react'

// const App = () => {
//   const [name,setName] = useState('');
//   return (
//     <div>
//       <EditName setName={setName}/>
//       <DisplayName name={name}/>
//     </div>
//   )
// }

// export default App


// const DisplayName = ({name}) => {
//   return (
//     <div>
//       <h2>name:{name}</h2>
//     </div>
//   )
// }

// const EditName = ({setName}) => {
//   return (
//     <div>
//       <button onClick={()=>setName('fathima')}>set Name</button>
//     </div>
//   )
// }











// import React from 'react'

// const App = () => {
//   return (
//     <div>
//         <input type="text" name='name' value={formData.name} onChange={addData} placeholder='enter you name'/>
//         <input type="text" name='age' value={formData.age} onChange={addData} placeholder='enter you age'/>
//         <input type="text" name='course' value={formData.course} onChange={addData} placeholder='enter you course'/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import useToggle from '../customHooks/useToggle'
// import useCounter from '../customHooks/useCounter';

// const App = () => {
//     const {data,markToggle} = useToggle();
//     const {count,increment,decrement,reset} = useCounter();
//   return (
//     <div>
//         <button onClick={markToggle}>{data ? 'hide': 'show'}</button>
//         {
//         <h5>{data ? 'Hello Im visible!' : ''}</h5>
//         }

//         <h2>count : {count}</h2>
//         <button onClick={increment}>increment</button>
//         <button onClick={decrement}>decrement</button>
//         <button onClick={reset}>reset</button>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import ProductListing from '../components/ProductListing'
// import SearchInput from '../components/SearchInput'
// import { useState } from 'react'
// const App = () => {
//     let productListes = ['Apple iPhone 14','Samsung Galaxy S23','OnePlus Nord CE 3','Redmi Note 12','Realme Narzo 60','Sony WH-1000XM4 Headphones','Boat Airdopes 141','Apple MacBook Air M2','Dell Inspiron 15','HP Pavilion x360']

//     const [product,setProducts] = useState(productListes);
//     const [search,setSearch] = useState('');
//   return (
//     <div>
//         <SearchInput setSearch={setSearch}/>
//         <ProductListing product={product} productsList={productListes} search={search}/>
//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const App = () => {
//     const [data,setData] =useState({});
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
//             if(!response.ok){
//                 throw new Error('something went wrong');
//             }
//             return response.json();
//         }).then((data)=>{
//             setData(data);
//         }).catch((error)=>{
//             console.log(error);
//         })
//     },[])
//   return (
//     <div>
//         <div>{JSON.stringify(data)}</div>
//     </div>
//   )
// }

// export default App



// ** FORWARD REF **
// ---------------------------------
// ---------------------------------

// import React, { useEffect, useRef } from 'react'

// const inputFunction = React.forwardRef((props,ref)=>{
//     <input type="text" ref={ref}/>
// })

// const App = () => {
//     const inputRef = useRef(null);

//     useEffect(()=>{
//         inputRef.current.focus();
//     },[])
//   return (
//     <div>
//         <inputFunction ref={inputRef}/>
//     </div>
//   )
// }

// export default App

// Build a Counter child component that receives count and onIncrement from parent.
// Parent stores the count and passes onIncrement using useCallback. Explain why useCallback is used here.

// import React, { useCallback } from 'react'
// import { useState } from 'react'

// const Counter = ({count , onIncrement})=>{
//   return(
//     <>
//     <h1>Count {count}</h1>
//     <button onClick={onIncrement}>Increment</button>
//     </>
//   )
// }

// const App = () => {
//   const [count,setCOunt] = useState(0);

//   const onIncrement = useCallback(()=>{
//     return setCOunt(count+1);
//   },[count])
//   return (
//     <div>
//       <Counter count={count} onIncrement={onIncrement}/>
//     </div>
//   )
// }

// export default App

// Create a Greeting component that accepts name and isLoggedIn props. If isLoggedIn is true show Hello, {name},
//  otherwise show Please log in. Use default prop for name as "Guest".

// import React from 'react'
// import { useState } from 'react'
// const Greeting = ({name= 'guest',isLoggedIn})=>{
//   return (
//     <>
//     <h3>{isLoggedIn ? `Hello ${name}` : 'please Log in'}</h3>
//     </>
//   )
// }

// const App = () => {
//   const [isLoggedIn , setIsLoggedin] = useState(false);
//   const name = 'fathima'
//   return (
//     <div>
//       <button onClick={()=>setIsLoggedin(isLoggedIn ? false :true)}>{isLoggedIn ? 'log out' : 'log in'}</button>
//       <Greeting name={name} isLoggedIn={isLoggedIn}/>
//     </div>
//   )
// }

// export default App




// ** DYNAMIC RENDEARING **
// ---------------------------------
// ---------------------------------

// import React from 'react'
// import { useState } from 'react';

// const App = () => {
//   let fruits = ['apple' , 'orange' , "mango" ,'pineapple' , 'watermelon' , 'kiwi'];
//   const [showdata , setShowData] = useState(false);
//   return (
//     <div>
//       <button onClick={()=>setShowData(showdata ? false : true)}>{showdata ? "hide Data":'Show List'}</button>
//       { showdata ? (
//         <ul>
//         {fruits.map((x,i)=>
//           (<li key={i}><h1 >{x}</h1></li>)
          
//         )}
//         </ul>
        
//       ): 'No Products Available'
//       }
//     </div>
//   )
// }

// export default App

