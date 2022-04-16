import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {apiKey, POPULAR_API} from "../private";
import FilmCard from "../components/FilmCard";

const Popular = () => {

    const [popularMovie, setPopularMovie] = useState([])

    const [currenPage, setCurrenPage] = useState(1)

    const pages = []

    for (let i = 1; i <= 19; i++) {
        pages.push(i)
    }




    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${currenPage}`)
            .then(({data}) => setPopularMovie(data.results))
    }, [])
    console.log(popularMovie)
    return (
        <div className=" p-6 bg-amber-400 ">
            <h1 className='text-5xl text-center text-blue-900 mb-5'>Popular Movies:</h1>
            <div className=" flex flex-row flex-wrap border-4 ">

                {
                    popularMovie.map(el => (
                        <FilmCard el={el} key={el.id}/>
                    ))
                }


                <div className="pt-6 m-auto">
                    {
                        pages.map(el=>(
                            <button type="button"
                                    className="mx-2  focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">{el}</button>

                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Popular;