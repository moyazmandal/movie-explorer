


import {Link} from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex items-center justify-around bg-purple-900 text-lg text-white p-2">
      <div className="">
         <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <span className=" text-3xl">🎬</span> MovieExplorer
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <span>
          <Link to="/">
          Home
          </Link>
        </span>
        <span>
         <Link to="/movies">
          Movies
         </Link>
        </span>
      </div>
    </nav>
  );
}
