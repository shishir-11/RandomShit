import React, { useEffect, useState } from 'react'
// import Card from '../components/Card'
import CardList from '../components/CardList'
import Button from '../components/Button';
// import { Button } from '@mui/material';
import img1 from '../components/3.jpg'
import img2 from '../components/4.jpg'
import img3 from '../components/Frog_on_palm_frond.jpg'


const images = [img1,img2,img3];

export default function Home() {
  const [content,setContent] = useState("");
  function addContent(data){
    console.log(data);
    setContent(data);
  }
  const[image,setImage] = useState(images[0]);
  const[ind,setInd] = useState(0);
  
  function changeBgImage() {
    if (ind === images.length-1) {
      setInd(0);
    }
    else setInd(ind+1);

    setImage(images[ind]);
  }

  useEffect(()=>{
    const IntervalId = setInterval(changeBgImage,5000);
    return ()=>{
      clearInterval(IntervalId)
    }
  },[changeBgImage])


  return (
    <main
    className='w-screen'
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', // Ensure the background covers the entire viewport height
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
      <div className='h-screen'></div>
    </main>
  )
}
