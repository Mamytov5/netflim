import React, {useEffect, useState} from 'react';
import FilmCard from "../components/FilmCard";
import axios from "axios";
import {apiKey} from "../private";

const Upcoming = () => {
    const [upcoming,setUpcoming]=useState([])
    useEffect(()=>{
        axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
            .then(({data})=> setUpcoming(data.results))
    },[])
    console.log(Upcoming)
    return (
        <div className=" p-6 bg-amber-400 ">
            <h1 className='text-5xl text-center text-blue-900 mb-5'>Upcoming Movies:</h1>
            <div className=" flex flex-row flex-wrap border-4">

                {
                    upcoming.map(el => (
                        <FilmCard el={el} key={el.id}/>
                    ))
                }
            </div>
        </div>

    );
};

export default Upcoming;