import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";


const Header = () => {
    const navigate = useNavigate()
    const [searchTitle, setSearchTitle] = useState("")

    const handleChange = (e) => {
        setSearchTitle(e.target.value)
    }
    const handleSearch = () => {
        if(searchTitle.trim()){
            navigate(`/movies/search-results/:${searchTitle}`)

        }

    }

    return (
        <nav className="bg-white border-gray-200 px-2  py-5 rounded dark:bg-gray-800 bg-amber-500">
            <div className="container flex flex-wrap justify-between items-center mx-auto  ">
                <NavLink to="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9"
                         alt="Flowbite Logo"/>
                    <span
                        className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Cinema</span>
                </NavLink>
                <div className=" md:order-2">
                    <div className="relative mr-3 md:mr-0 flex items-center justify-center">
                        <input
                            onChange={handleChange}
                            type="text" id="email-adress-icon"
                            className="block p-2 pl-10  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for a movie ..."/>
                        <button
                            onClick={handleSearch}
                            className="relative inline-flex items-center justify-center p-0.5 mb- mr-2 ml-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                           <span
                               className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                 search
                            </span>
                        </button>
                    </div>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                     id="mobile-menu-3">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <NavLink to="/"
                                     className="block py-2 pr-4 pl-3 text-2xl text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                     aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Popular"
                                     className="block py-2 pr-4 pl-3  text-2xl  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Popular</NavLink>
                        </li>
                        <li>
                            <NavLink to="/TopRated"
                                     className="block py-2 pr-4 pl-3  text-2xl  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Top
                                rated</NavLink>
                        </li>
                        <li>
                            <NavLink to="NowPlaying"
                                     className="block py-2 pr-4 pl-3  text-2xl text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Now
                                playing</NavLink>
                        </li>
                        <li>
                            <NavLink to="Upcoming"
                                     className="block py-2 pr-4 pl-3  text-2xl text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Upcoming</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Latest"
                                     className="block py-2 pr-4 pl-3  text-2xl text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Latest</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>);
};

export default Header;