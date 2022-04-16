import React, {useEffect, useState} from 'react';
import axios from "axios";
import {apiKey} from "../private";
import {useParams} from "react-router-dom";
import Slider from "react-slick";
import FilmCard from "../components/FilmCard";

const ActorBio = () => {

    const [person, setPerson] = useState({})

    const [actorFilms,setActorFilms] =useState([])

    const {actorId} = useParams()

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}&language=en-US`)
            .then(({data}) => setPerson(data))
        axios(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${apiKey}`)
            .then(({data})=> setActorFilms(data.cast))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerPadding:"60px",
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        autoplay:true
    };


    return (
        <div className="container p-3">
            <div className="flex flex-row flex-wrap">
                <div className="basis-1/3">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${person.profile_path}`} alt=""/>
                </div>
                <div className="basis-1/2">
                    <h1 className="text-4xl">{person.name}</h1>
                    <p>{person.biography}</p>
                </div>
            </div>
            <Slider {...settings}>
                {
                    actorFilms.map(el =>(
                        <FilmCard el={el}/>

                            // <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} alt=""/>

                    ))
                }
            </Slider>
        </div>
    );
};

export default ActorBio;