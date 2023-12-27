import React from 'react'

export default function Button(props) {
  return (
    <button style={{height:"30px",color:"white" ,borderColor:"white" ,borderRadiu:"5px",borderWidth:"2px"}}>{props.content}</button>
  )
}
