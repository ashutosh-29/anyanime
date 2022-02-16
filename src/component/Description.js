import React, { useState,useEffect } from 'react';
import { useLocation } from "react-router";
import { BallTriangle } from  'react-loader-spinner'; 
import axios from 'axios';

function Description() {
  const [isLoading, setIsLoading] = useState(false);
  const [mySynopsis,setMySynopsis]=useState("");
  const [myImgs,setMyImgs]=useState("");
  const [myTitle,setMyTitle]=useState("");
  const [myGenres,setMyGenres]=useState([]);
  const location = useLocation();
  
    useEffect(()=>{
      let animeIDStr=location.search;
      animeIDStr=animeIDStr.substring(1,animeIDStr.length);
      const animeID=parseInt(animeIDStr);
      const getAllInfo = async()=>{
        const res = await axios.get(`https://api.jikan.moe/v4/anime/${animeID}`);
        const mydata = res.data.data;
        setIsLoading(true);
        setMyGenres(mydata.genres);
        setMyImgs(mydata.images.jpg.large_image_url);
        setMySynopsis(mydata.synopsis);
        setMyTitle(mydata.title);
        setIsLoading(false);
       }
       
       getAllInfo();
    
    },[]);

  return (
    <>
    {isLoading ? (
        <div className='flex justify-center'><BallTriangle heigth="100" width="100" color='grey' ariaLabel='loading'/></div>
      ) : (
        <div className='w-3/4 text-white m-auto flex'>
      <div className="w-1/2 rounded overflow-hidden">
        <img className="w-full h-1/2 rounded bg-center bg-cover" src={myImgs} alt="Sunset in the mountains"></img>
      </div>
      <div className="px-6 py-4 w-1/2">
        <div className="font-bold text-2xl mb-2">{myTitle}</div>
          <p className="text-[#EFEFEF] text-base">
          {mySynopsis.substring(0,mySynopsis.length-24)}
          </p>
          <div className="px-6 pt-4 pb-2">
            {
              myGenres.map((genre)=>(
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># {genre.name}</span>
              ))
            }
            
          </div>
        </div>
        
    </div>
      )}
    </>
    
  )
}

export default Description