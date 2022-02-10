import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BallTriangle } from  'react-loader-spinner';
import Pagination from './Pagination';

function Animes() {
    const [animes,setAnimes]=useState([]);
    const [page,setPage]=useState(1);
    const [hover,setHover]=useState('');
    const [favorites,setFavorites]=useState([]);
    function next(){
        setPage(page+1);
    }
    function previous(){
        if(page===1)return;
        setPage(page-1);
    }
    useEffect(function(){
        axios.get(`https://api.jikan.moe/v3/top/anime/${page}`).then((res)=>{
        console.table(res.data.top);
        setAnimes(res.data.top);
        if(localStorage.getItem("AnyAnimeFav")!==null && localStorage.getItem("AnyAnimeFav")!==""){
            let oldFav=localStorage.getItem("AnyAnimeFav");
            oldFav=JSON.parse(oldFav);
            setFavorites([...oldFav]);
        }
        });
    },[page]);
    let add=(anime)=>{
        axios.get(`https://api.jikan.moe/v4/anime/${anime.mal_id}`).then((res)=>{
            const mydata={
                "mal_id":res.data.data.mal_id,
                "title": res.data.data.title,
                "score":res.data.data.score,
                "rating":res.data.data.rating,
                "popularity":res.data.data.popularity,
                "status":res.data.data.status,
                "images": res.data.data.images,
                "genres":res.data.data.genres
            }
            let newArray=[...favorites,mydata];
            setFavorites([...newArray]);
            localStorage.setItem("AnyAnimeFav",JSON.stringify(newArray));
        });
        
    }
    let remove=(movie)=>{
        let newArray = favorites.filter((val)=> val.mal_id !== movie.mal_id);
        setFavorites([...newArray]);
        localStorage.setItem("AnyAnimeFav",JSON.stringify(newArray));
    }
  return <>
  <div className='mb-8'>
  <div className='mt-8 mb-8 font-bold text-2xl md:text-3xl text-center text-[#79B4B7]'>Top Animes</div>
  {
      animes.length===0 ? <div className='flex justify-center'><BallTriangle heigth="100" width="100" color='grey' ariaLabel='loading'/></div>:
  
  <div className='flex flex-wrap m-2 md:m-4 justify-center'>
    {
        animes.map((movie)=>(
            <div onMouseEnter={()=>setHover(movie.mal_id)} onMouseLeave={()=>setHover('')} className={ `relative bg-[url(${movie.image_url})] m-4 h-[20vh] w-[200px] md:shadow-2xl md:h-[30vh] md:w-[300px] shadow-xl rounded-sm bg-center bg-cover flex items-end hover:scale-110 ease-out duration-300`}>
                {
                    hover===movie.mal_id && <>
                    {
                       favorites.find((m)=>m.mal_id===movie.mal_id) ?
                       <div className='cursor-pointer absolute top-2 right-2 text-xl ' onClick={()=>remove(movie)}> ❌ </div>:
                       <div className='cursor-pointer absolute top-2 right-2 text-2xl font-bold' onClick={()=>add(movie)}> ⭐ </div>
                    }  
                    </>
                }
                
                <div className='text-xl md:text-xl text-white bg-gradient-to-r from-[#090a0f] to-[#1b2735] p-1 pl-2 w-full flex '>
                    {movie.title}
                </div>
            </div>
        ))
    }
    
    
      
  </div>
}

  </div>
    <Pagination page={page} previous={previous} next={next}/>
    </>;
}

export default Animes;
