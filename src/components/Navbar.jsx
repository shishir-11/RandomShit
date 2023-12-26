import React from 'react'
import { Link } from 'react-router-dom';
import Navlinks from './Navlinks';

function Navbar() {

  return (
        <nav className='w-full h-16 fixed text-center py-2'>
            <div className='float-left px-8 w-auto h-auto'>
              <Link to={"/"} className='text-4xl'>Blogs</Link>
            </div>
            <div className='w-auto h-16 float-end pr-10'>
              <ul className='w-auto h-16 flex m-0 p-0'>
                <Navlinks path="/" content="Home"/>
                <Navlinks path="/about" content="About"/>
                <Navlinks path="/write" content="Write"/>
                <Navlinks path="/contact" content="Contact"/>

                {/* <li className='w-auto h-16 p-0 pr-12 text-2xl text-gray-600'><Link to={"/"} onMouseEnter={controlMouseEnter} className='Home'>Home</Link></li>
                <li className='w-auto h-16 p-0 pr-12  text-2xl text-gray-600'><Link to={"/about"} onMouseEnter={controlMouseEnter} className='About'>About</Link></li>
                <li className='w-auto h-16 p-0 pr-12 text-2xl text-gray-600'><Link to={"/write"} onMouseEnter={controlMouseEnter} >Write</Link></li>
                <li className='w-auto h-16 p-0 pr-12 text-2xl text-gray-600'><Link to={"/contact"} onMouseEnter={controlMouseEnter}>Contact</Link></li> */}
              </ul>
            </div>
        </nav>


  )
}

export default Navbar;
