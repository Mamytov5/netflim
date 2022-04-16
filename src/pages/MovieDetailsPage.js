import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {apiKey} from "../private";
import ActorsPage from "./ActorsPage";

const MovieDetailsPage = () => {
    const [movie, setMovie] = useState({})
    const {id} = useParams()
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-U`)
            .then(({data}) => setMovie(data))
    }, [])
    console.log(movie)
    const {
        poster_path,
        backdrop_path,
        title,
        overview,
        status,
        runtime,
    } = movie
    const durationTime = Math.floor(runtime / 60) + "h" + " " + runtime % 60 + "min"
    return (
        <div className=" p-6"
             style={{
                 background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}")`,
                 height: "100vh"

             }}
        >
            <div className="flex flex-wrap flex-row px-6">
                <div className="basis-1/2">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt=""/>
                </div>
                <div className="basis-1/2 text-left">
                    <h1 className="text-4xl text-amber-50">{title}</h1>
                    <h3 className="text-2xl text-left my-3 text-amber-50">{overview}</h3>
                    <h1 className="text-2xl text-amber-50"> Time:{durationTime}</h1>
                </div>
                <ActorsPage/>


            </div>
        </div>
    );
};

export default MovieDetailsPage;