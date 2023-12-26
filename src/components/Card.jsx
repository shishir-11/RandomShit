import React from 'react';


export default function Card(props) {
  
  function HandleClick(){

    const bodyStyle = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Optional: This keeps the background fixed while scrolling
        height: '100vh', // Set the height to full viewport height
      };
    Object.assign(document.body.style, bodyStyle);
    props.whenClicked(props.id);

  }  
  return (
    <div
      className="inline-block float-end h-60 w-40 m-4 overflow-hidden shadow-md ease-in-out hover:-translate-y-2 hover:shadow-lg transition-all pr-8"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={HandleClick}
    ></div>
  );
}
