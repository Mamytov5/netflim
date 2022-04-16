import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {apiKey} from "../private";
import FilmCard from "../components/FilmCard";

const SearchResults = () => {
    const {movieName} = useParams()
    const [result, setResult] = useState([])
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`)
            .then(({data}) => setResult(data.results))
    }, [movieName])
    return (
        <div className="container p-2">
            <div className="flex flex-row flex-wrap">
                {
                    result.map(el => (
                        <FilmCard el={el}/>
                    ))


                }
            </div>
        </div>
    );
};

export default SearchResults;