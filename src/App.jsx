import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [count,setchange]= useState(0)

   const change=(x,count)=>{

       
    if(x==2)
    {
        count= count*2;
     return   setchange(count)
    }

   

      return setchange(x+count)
       
   }

    return (
    <div className="App">

      <div id='flex'><button onClick={()=>{change(-1,count)}}>-</button>
          <div className={count%2!==0? "red":"green"}>count:{count}</div>
          <button onClick={()=>{change(1,count)}}>+</button></div>
          <button onClick={()=>{change(2,count)}}>double</button></div>
        
        
   
  );
}

export default App;
