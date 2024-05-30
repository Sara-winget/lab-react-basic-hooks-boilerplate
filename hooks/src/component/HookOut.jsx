import React from 'react'
import {useState} from 'react'
import{useEffect} from 'react'
import './hooksOut.css'
function HookOut(){
    const design={
        width:100,
        height:300,
        padding:40,
        margin:50,
       
    }

    const [count,setCount]=useState(0)
    const [show,setShow]=useState(false)
    const[cont,setCont]=useState(false)
    
    
    useEffect(()=>{
        if(cont){
        alert("Context Button Clicked")
        
        
         setCont(!cont)
         setShow(!show)
        }
    },[cont])

    return(
        <React.Fragment>
            <button onClick={()=>setCount(0)}>toggle</button>
            <div  style={design} className='div'>
                <br></br>
              {show &&<p>welcome to react hooks</p>}
             <button onClick={()=>setCont(true)}>Connect</button>
             <br></br>
             <h1>{count}</h1>
             <button onClick={()=>setCount(count+1)}on>like</button>
            </div>
        </React.Fragment>
    )
}
export default HookOut