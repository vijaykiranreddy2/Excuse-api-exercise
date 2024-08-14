import { useState,useEffect } from 'react'
import Axios from "axios";

import './App.css'

function App() {

const [excuse,setExcuse]=useState("");

  const genfunc=(name)=>{
     Axios.get(`https://excuser-three.vercel.app/v1/excuse/${name}`).then((res)=>{

      console.log(res)
      setExcuse(res.data[0].excuse);
  }) 
        
  }

  return (
    <div className='card'>
    <div className='header'>
      <h1>Generate an excuse</h1>
    </div>
    <div className='options'>
      <button onClick={()=>genfunc("party")}>Party</button>
      <button onClick={()=>genfunc("family")}>Family</button>
      <button onClick={()=>genfunc("office")}>office</button>
    </div>
    <div className='reason'>
      <p>{excuse}</p>
    </div>
      
    </div>
  )
}

export default App
