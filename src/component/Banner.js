import React from 'react';
import Image from './banner.jpg';
import './Banner.css';
function Banner() {
  return <>
    <div className={`bg-[url(${Image})] h-[40vh] md:h-[60vh] shadow-xl md:shadow-2xl w-full bg-center bg-cover w-full`}>
      <div className="spotlight1">
        <div className="spotlight flex items-end">
          <div className='pl-8 pb-8'> 
            <h1 className='text-[#79B4B7] font-bold text-4xl'>Welcome to AnyAnime </h1>
            <p className='text-white w-1/2 text-xl'>AnyAnime is a free site to list your favorite anime or the anime that you are going to watch in future. You can search and sort the anime on the bais of rating, genre, release date, etc. without any registration or payment. By having No Ads in all kinds, we are trying to make it the safest site for free anime.</p>
          </div>
            
        </div>
      </div>  
    </div>
  </>;
}

export default Banner;
