import React from 'react';
import frog_img from './Frog_on_palm_frond.jpg';

export default function Card() {
  return (
    <div
      className="relative inline-block h-80 w-52 m-4 overflow-hidden shadow-md ease-in-out hover:-translate-y-2 hover:shadow-lg transition-all"
      style={{
        backgroundImage: `url(${frog_img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    ></div>
  );
}
