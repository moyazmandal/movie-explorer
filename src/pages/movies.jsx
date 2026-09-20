import { useState, useEffect } from "react";
import MovieModal from "../components/movieModal";
import { Search } from 'lucide-react';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [modal,selModal]= useState(false)
  const [selectedMovie,setSelectedMovie]= useState(null);
  const [searchShow,setSearchShow]= useState("")
  const [searchBtn , setSearchBtn]= useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      const url = searchShow.trim()===""? "https://api.tvmaze.com/shows":`https://api.tvmaze.com/search/shows?q=${searchShow}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if(searchShow.trim()===""){
            setMovies(data)
          }else{
            setMovies(data.map((item) =>item.show))
          }
        })
        .catch((err) => {
          console.error("Error fetching movies:", err);
        });
    }, 300);

    return () => clearTimeout(timer);
  }, [searchBtn]);

  const modalOpenHandler=(singleMovie)=>{
    // event.preventDefualt();
    setSelectedMovie(singleMovie)
    selModal(true)
  }
  const modalCloseHandler=()=>{
    // event.preventDefualt();
    setSelectedMovie(null);
    selModal(false)
  }
  const searchHandeler=()=>{
    setSearchBtn(searchShow)
  }

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header & Search Bar Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-900/50 pb-6">
            <div>
              <h1 className="text-3xl font-bold text-white">
                All <span className="text-purple-500">Movies & Shows</span>
              </h1>
              <span className="text-sm text-gray-400">
                Total: {movies.length} shows
              </span>
            </div>


            <div className="w-full md:w-72 flex gap-2">
              <input
                type="text"
                value={searchShow} 
                placeholder=" Search for a movie...    "
                onChange={(e) => setSearchShow(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-purple-500/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              />
              <button type="button" onClick={searchHandeler} className="font-medium border border-purple-500/50 rounded-lg p-1 cursor-pointer"> <Search /></button>
            </div>
          </div>
          {/* cards */}
      
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center items-stretch p-4">

  {movies.map((movies)=>(
  <div className="border bg-blue-500 w-full p-3 rounded-lg space-y-2 flex flex-col justify-between">
    <img 
      src={movies?.image?.medium} 
      alt="Movie Poster" 
      className="w-full h-64 object-cover rounded-md" 
    />
    <div className="space-y-1">
      <h2 className="font-bold text-lg text-white">{movies.name}</h2>
      <div className="flex justify-between ">
      <p className="text-sm text-yellow-300 font-semibold">⭐ {movies?.rating?.average}</p>
      <p>📅 {movies?.premiered}</p>
      </div>
    </div>
    <button 
      type="button" 
      onClick={()=>modalOpenHandler(movies)} 
      className="bg-blue-900 hover:bg-blue-800 text-white p-2 rounded-xl w-full font-medium transition-colors cursor-pointer"
    >
      Explore details
    </button>
  </div>
       

  ))}
      </div>
        </div>
      </div>


      {modal && <MovieModal close={modalCloseHandler} movie={selectedMovie}/>}
    </>
  );
}
