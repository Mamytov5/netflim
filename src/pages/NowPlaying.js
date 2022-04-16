import React, {useEffect, useState} from 'react';
import FilmCard from "../components/FilmCard";
import axios from "axios";
import {apiKey} from "../private";

const NowPlaying = () => {

    const [nowPlaying, setNowPlaying] = useState([])
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
            .then(({data}) => setNowPlaying(data.results))
    }, [])
    console.log(nowPlaying)
    return (
        <div className=" p-6 bg-amber-400 ">
            <h1 className='text-5xl text-center text-blue-900 mb-5'>Now Playing Movies:</h1>
            <div className=" flex flex-row flex-wrap border-4">

                {
                    nowPlaying.map(el => (
                        <FilmCard el={el} key={el.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default NowPlaying;