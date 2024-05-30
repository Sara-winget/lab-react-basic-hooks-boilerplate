import { useState } from 'react'
import UseState from './component/UseState'
import './App.css'
import UseEffect from './component/UseEffect'
import UseContext from './component/UseContext';
import HookOut from './component/HookOut';
//export const  ToggleTheme=React.createContext()
//function App() {
//  const [state,setState]=useState(true);
//  const handelToggle=()=>{
//    setState(state=>!state)
//  }
//
//  return (
//    
//    <ToggleTheme.Provider value={state}>
//       {/* <UseState/>*/}
//       {/*<UseEffect/>*/}
//       <button onClick={()=>{handelToggle}}> Toggle</button>
//      <UseContext/>
//    </ToggleTheme.Provider>
//  )
//}
//
//export default App

function App(){
  return(
<>
<HookOut/>
</>
  )
}
export default App