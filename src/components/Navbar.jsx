import { Link, NavLink, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"

export default function Navbar(){

    const location = useLocation();

    const isHomePage = location.pathname === "/"

    return(
        <div className={`fixed flex items-center justify-between px-10 w-full shadow py-2.5 z-50 ${isHomePage ? "bg-white/30 backdrop-blur-md" : "bg-white/85" } transition-all duration-500`}>
            <Link to="/">
            <div className="flex items-center">
                
                    <img src={logo} className="w-12"/>
                    <h1 className="text-2xl font-extrabold 
                    text-[#3a5a40]">MODUS</h1>
                
            </div>
            </Link>
            <div className="flex justify-between gap-10">
                <div className="group flex flex-col items-center">
                    <NavLink to="/destinations" className='tracking-widest text-gray-800 hover:text-green-700 transition-colors'>DESTINATIONS</NavLink>
                    <hr className="w-0 h-0.5 bg-green-600 border-none transition-all duration-300 group-hover:w-full"/>
                </div>
                <div className="group flex flex-col items-center">
                    <NavLink to="/experiences" className='tracking-widest text-gray-800 hover:text-green-700 transition-colors'>EXPERIENCES</NavLink>
                    <hr className="w-0 h-0.5 bg-green-600 border-none transition-all duration-300 group-hover:w-full"/>
                </div>
                <div className="group flex flex-col items-center">
                    <NavLink to="/stories" className='tracking-widest text-gray-800 hover:text-green-700 transition-colors'>STORIES</NavLink>
                    <hr className="w-0 h-0.5 bg-green-600 border-none transition-all duration-300 group-hover:w-full"/>
                </div>
                <div className="group flex flex-col items-center">
                    <NavLink to="/about" className='tracking-widest text-gray-800 hover:text-green-700 transition-colors'>ABOUT</NavLink>
                    <hr className="w-0 h-0.5 bg-green-600 border-none transition-all duration-300 group-hover:w-full"/>
                </div> 
            </div>
            <button className="border border-green-600 px-6 py-2 hover:cursor-pointer hover:shadow-lg text-lg font-medium transition-all button-animation">PLAN YOUR JOURNEY</button>
        </div>
    )
}