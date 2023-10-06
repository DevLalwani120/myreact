import React, { useState } from 'react'

export default function Counter() {
    const [num,setNum]=useState(0);
    function clickAdd(){
       setNum(num+1)
    }
    function clicksub(){
        setNum(num-1)
     }
  return (
    <>
    <div>{num}</div>
    <button onClick={clickAdd}>click Add</button>
    <button onClick={clicksub}>click Sub</button>
    </>
  )
}
