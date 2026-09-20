import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="flex items-center justify-around bg-purple-900 md:text-lg text-sm text-white p-2">
        <a className=" cursor-pointer"> <link rel="stylesheet" href="/" /> 🎬 MovieExplorer</a>
        <p>© 2026 MovieExplorer</p>
        <a  className=" cursor-pointer flex items-center gap-1" href="https://github.com/moyazmandal" ><FaGithub /> Githab</a>
    </div>
  )
}
