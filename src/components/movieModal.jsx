import { X } from 'lucide-react';

export default function MovieModal({ movie, close }) {
  if(!movie) {
    return null
  }
  return (
    <div className="inset-0 bg-black/70 fixed flex justify-center items-center z-50 p-4">
      
      <div className="p-6 bg-gray-800 text-white rounded-xl max-w-lg w-full space-y-4 shadow-2xl border border-gray-700">
        
        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
          <h1 className="font-bold text-xl text-purple-400">
            Explore movie details: 
          </h1>
          <button 
            type="button"
            onClick={close} 
            className="font-bold text-xl cursor-pointer text-gray-400 hover:text-red-500"
          >
          <X />
          </button>
        </div>
        <div className='space-y-3'>
          <img className='object-cover w-full max-h-[20vh] overflow-auto' src={movie?.image?.original}alt="" />
          <div className="space-y-1">
      <h2 className="font-bold text-lg text-white">{movie.name}</h2>
      <div className="flex justify-between ">
      <p className="text-sm text-yellow-300 font-semibold">⭐ {movie?.rating?.average}</p>
      <p>📅 {movie?.premiered}</p>
      </div>
      <p> Overview: </p>
      <p>{movie.summary}</p>
      <div className='flex justify-between items-center'>
        <div></div>
        <div><button  onClick={close}  className="bg-red-500 hover:bg-red-800 t text-white p-2 rounded-xl w-full font-medium transition-colors cursor-pointer"> Close </button></div>
      </div>
        </div>
</div>

      </div>
    </div>
      
  );
}