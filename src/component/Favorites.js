import React,{useState,useEffect} from 'react';
import Pagination from './Pagination';

function Favorites() {
  let genres=['All','Action','Adventure','Avant Garde','Comedy','Drama','Fantasy','Horror','Mystery','Romance','Sci-Fi', 'Slice of Life','Sports','Supernatural','Suspense' ]
  const [favorites,setFavorites]=useState([]);

  useEffect(()=>{
    let oldFav=localStorage.getItem("AnyAnimeFav") || [];
    oldFav=JSON.parse(oldFav || []);
    setFavorites([...oldFav]);
  },[]);

  let remove=(movie)=>{
    let newArray = favorites.filter((val)=> val.mal_id !== movie.mal_id);
    setFavorites([...newArray]);
    localStorage.setItem("AnyAnimeFav",JSON.stringify(newArray));
  }
  
  const [page,setPage]=useState(1);
  const [curGenre,setGenre]=useState('All');
  function next(){
      setPage(page+1);
  }
  function previous(){
      if(page===1)return;
      setPage(page-1);
  }

  return <>
    <div className='flex flex-wrap w-3/5 justify-center mb-2 mt-2 space-x-8 m-auto '>
      {
        genres.map((genre)=>(
          <button className={
            curGenre===genre ? 
            'border-[#79B4B7] text-[#090a0f] bg-[#79B4B7] font-bold rounded-xl border-4 p-2 m-2 hover:border-[#9A9483] hover:bg-[#9A9483]':
            'border-[#9A9483] text-[#090a0f] bg-[#9A9483] font-bold rounded-xl border-4 p-2 m-2 hover:border-[#79B4B7] hover:bg-[#79B4B7]'
          } onClick={()=>setGenre(genre)}> {genre} </button>
        ))
      }
    </div>
    <div className='flex justify-center space-x-8 m-auto mb-2 mt-2 '> 
      <input type='text' placeholder='Search' className='border-[#79B4B7] text-[#090a0f] font-bold rounded-xl border-2 p-2 m-2'/>
      <input type='number' placeholder='Row' className='border-[#79B4B7] text-[#090a0f] font-bold rounded-xl border-2 p-2 m-2'/>
    </div>
    <div className="flex flex-col w-2/3 m-auto mb-2 mt-2 ">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 text-center">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Rating
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Popularity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Genre
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Remove</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {
                favorites.map((Anime) => (
                  <tr key={Anime.mal_id} className='text-center justify-center items-center text-center'>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={Anime.images.jpg.small_image_url} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{Anime.title}</div>
                          <div className="text-sm text-gray-500">{Anime.status}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{Anime.score}</div>
                      <div className="text-sm text-gray-500">{Anime.rating}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 text-sm text-gray-900">
                        {Anime.popularity}
                      </span>
                    </td>
                    <td className="p-2 whitespace-nowrap flex flex-wrap w-2/3 text-sm text-gray-500 items-center justify-center ">
                    
                    {Anime.genres.map((data)=>(
                      <span className="px-2 inline-flex text-xs leading-5 m-1 font-semibold rounded-full bg-green-100 text-green-800 text-center">
                      {data.name}
                      </span>)
                      )
                    }
                        
                      </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button onClick={()=>remove(Anime)} className="text-red-600 hover:text-red-900">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
    
      <Pagination page={page} previous={previous} next={next}/>
  </>
}

export default Favorites;
