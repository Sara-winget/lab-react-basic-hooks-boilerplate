import React from 'react'
import {useState} from "react"
import {useEffect} from "react"

function UseEffect(){
    const [age,setAge]=useState(19)
    const [sib,setSib]=useState(6)
    useEffect(()=>{
        console.warn(`Something changed ${age}`)
        alert(`something changed ${age}`)
    },[age])
    return(
        <div>
            <h1>My Age {age}</h1>
            <h1>My sib age {sib}</h1>
            <button onClick={()=>setAge(age=>age+1)}>Click myAge</button>
            
            <button onClick={()=>setSib(sib+1)}>Click mySib</button>
        </div>
    )
}
export default UseEffect