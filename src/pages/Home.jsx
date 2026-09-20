
import {Link} from "react-router-dom";
export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
    <div className="bg-[url('https://static.tvmaze.com/uploads/images/original_untouched/0/526.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/60 text-center flex flex-col justify-center items-center">
          <div className="space-y-3">
            <h1 className="text-white text-5xl ">DISCOVER MOVIES </h1>
          <p className="text-white text-lg ">Explore and discover your favorite
 movies from around the world.</p>
 <button className="bg-purple-600 p-2 rounded-2xl h-10 w-40"> <Link to="/movies">Explore Now</Link> </button>
        </div>
          </div>
      </div>
    </div>
  );
}
