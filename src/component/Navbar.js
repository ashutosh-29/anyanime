//rfce
import React from 'react';
import Logo from '../AnyAnime.svg'
import { Link } from 'react-router-dom';
function Navbar() {
  return <>
    <div className='flex items-center'>
        <img src={Logo} className='w-1/3'></img>
            <div className='w-1/3'></div>
            <div className='flex w-1/3 space-x-8 mr-10 justify-end'>
                <Link to='/' className='text-[#79B4B7] font-bold text-xl md:text-3xl'>Animes</Link> 
                <Link to='/favorites' className='text-[#79B4B7] font-bold text-xl md:text-3xl'>Favourites</Link>
            </div>
            
        
    </div>
    
    
    </>;
}

export default Navbar;
