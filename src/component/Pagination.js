import React,{useState} from 'react';

function Pagination({page,previous,next}) {
  
  return <>
  <div className='flex sticky bottom-1 justify-center mb-5'>
    <button className='border-[#79B4B7] text-[#090a0f] bg-[#79B4B7] font-bold rounded-l-xl border-4 p-2 border-r-0'  onClick={previous}> &lt; </button>
    <button className='border-[#79B4B7] text-[#090a0f] bg-[#79B4B7] font-bold border-4 p-2'>. {page} .</button>
    <button className='border-[#79B4B7] text-[#090a0f] bg-[#79B4B7] font-bold rounded-r-xl border-4 p-2 border-l-0' onClick={next}> &gt;</button>
  </div>
  </>;
}

export default Pagination;
