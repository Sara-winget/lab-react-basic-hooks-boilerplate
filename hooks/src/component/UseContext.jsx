import React from 'react'
import { useContext } from 'react'
//import { ToggleTheme } from '../App'

function UseContext(){
    const theme=UseContext(ToggleTheme)
    const themeStyle = {
        backgroundColor: theme?"black":"grey",
        color:theme?"grey":"black",
        padding:"2rem",
        margin:"2rem"
      }
    return(
        <div style={themeStyle}>Made by me</div>
    )
}
export default UseContext