import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navlinks from './Navlinks';

function Navbar() {

  const[bgcolor,setBgColor] = useState("transparent")

  function changeColor(){
      if (window.scrollY >50) {
        setBgColor("#86B6F6");
      }
      else setBgColor("transparent");
  }

  useEffect(()=>{
    window.addEventListener('scroll',changeColor);

    return ()=>{
      window.removeEventListener('scroll',changeColor);
    }
  },[])
  return (
        <nav className='w-full h-16 fixed text-center py-2' style={{background:`${bgcolor}`, transition:"background-color 0.5s ease-in-out"}} >
            <div className='float-left px-8 w-auto h-auto'>
              <Link to={"/"} className='text-4xl'>Blogs</Link>
            </div>
            <div className='w-auto h-16 float-end pr-10'>
              <ul className='w-auto h-16 flex m-0 p-0'>
                <Navlinks path="/" content="Home"/>
                <Navlinks path="/about" content="About"/>
                <Navlinks path="/write" content="Write"/>
                <Navlinks path="/contact" content="Contact"/>
              </ul>
            </div>
        </nav>


  )
}

export default Navbar;
