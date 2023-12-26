import React, { useState } from 'react'
// import Card from '../components/Card'
import CardList from '../components/CardList'

export default function Home() {
  const [content,setContent] = useState("");
  function addContent(data){
    console.log(data);
    setContent(data);
  }
  return (
    <main className='relative'>
      {/* <div className='blog-content'>
      <h2 class='title'>"Lossless Youths"</h2>
        <p class='description'> Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
        praesentium nisi. Id laboriosam ipsam enim.  </p>
        <button>Read More</button>
      </div> */}
      <div className='fixed top-1/3 w-full pr-10'>
        <CardList ContentAdder={addContent}/>
      </div>
    </main>
  )
}
