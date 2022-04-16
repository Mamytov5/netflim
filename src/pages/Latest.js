import React, {useEffect, useState} from 'react';
import FilmCard from "../components/FilmCard";
import axios from "axios";
import {apiKey} from "../private";

const Latest = () => {
    const [latest, setLatest] = useState({})
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`)
            .then(({data}) => setLatest(data))
    }, [])
    console.log(latest)
    return (
        <div className=" p-6 bg-amber-400 ">
            <h1 className='text-5xl text-center text-blue-900 mb-5'>Now Playing Movies:</h1>
            <div className=" flex flex-row flex-wrap ">

                {/*{*/}
                {/*    latest.map(el => (*/}
                {/*        <FilmCard el={el} key={el.id}/>*/}
                {/*    ))*/}
                {/*}*/}
                <div className="basis basis-1/4">
                    <h1>{latest?.title}</h1>
                </div>
            </div>
        </div>

    );
};

export default Latest;