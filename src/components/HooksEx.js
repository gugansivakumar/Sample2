import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function HooksEx() {
   const[count,setCount]=useState(0)
   useEffect(()=>
   {
    document.title="Gugan";
    console.log({count})
   })
 
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Click!!</button>
    <button onClick={()=>{setCount(count+5)}}>Click!!</button>
    <button onClick={()=>{setCount(count-3)}}>Click!!</button>
    <button onClick={()=>{setCount(count+10)}}>Click!!</button>
  
    </div>
  )

  }