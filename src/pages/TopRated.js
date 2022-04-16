import React, {useEffect, useState} from 'react';
import FilmCard from "../components/FilmCard";
import axios from "axios";
import {apiKey} from "../private";

const TopRated = () => {

    const [topRated, setTopRated] = useState([])
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
            .then(({data}) => setTopRated(data.results))
    }, [])
    console.log(topRated)
    return (
        <div className=" p-6 bg-amber-400">
            <h1 className='text-5xl text-center text-blue-900 mb-5'>Top Rated Movies:</h1>
            <div className=" flex flex-row flex-wrap border-4">

                {
                    topRated.map(el => (
                        <FilmCard el={el} key={el.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default TopRated;