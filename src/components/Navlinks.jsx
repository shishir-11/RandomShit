import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Navlinks(props) {
  const [isMouseOver,setIsMouseOver] = useState(false);
  function controlMouseOver(){
    setIsMouseOver(!isMouseOver);
  }  
  return (
    
    <li className={`w-auto h-16 p-0 pr-12 text-2xl ${isMouseOver? 'text-white' : 'text-gray-600'}`}><Link to={props.path} className={props.path} onMouseEnter={controlMouseOver} onMouseLeave={controlMouseOver}>{props.content}</Link></li>
    
  )
}
