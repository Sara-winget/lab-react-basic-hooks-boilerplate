import React from "react"
import {useState} from "react"
import "../App.css"
function UseState(){
    const [age,setAge]=useState(18)
    const [sibAge,setSibage]=useState(16)
    const [state, setState]=useState({me:19,sibiling:3})
   const ageHandel =(person)=>{
    setState({...state,[person]:state[person]+1})
   }
   const myAge=()=>{
 setAge(age+1)
   }
   const mySib=()=>{
    setSibage(sibage=>sibage+1)
   }
    return(
        <div>
           {/* PROGRESSION 4
           
           
           <h1>My Age is {age}</h1>
            <h2>My sibiling Age is {sibAge}</h2>
            <buttton onClick={()=>setAge(age+1)}>Get Older</buttton>
            <button onClick={()=>setSibage(sibAge+1)}>Get Sib Age </button>
    */}

    {/*PROGRESSION 3
    <h1>My age {state.me}</h1>
    <h1>My sibiling Age {state.sibiling} </h1>
    <button onClick={()=>{ageHandel('me')}}>My Age</button>
    <button onClick={()=>{ageHandel('sibiling')}}>My sibiling</button>
*/}
    
{/*
    PROGRESSION 1 & 2
*/}
<h1>My age {age} </h1>
<h2>My sibiling age {sibAge}</h2>
<button onClick={myAge}>click for myAge</button><br></br>
<button onClick={mySib}>click for my sib age</button>
    </div>
    )
}
export default UseState