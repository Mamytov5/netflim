import React, {useEffect, useState} from 'react';
import axios from "axios";
import {apiKey} from "../private";
import {useParams} from "react-router-dom";
import Slider from "react-slick";
import ActorCard from "../components/ActorCard";

const ActorsPage = () => {
    const [actors, setActors] = useState(null)

    const {id: movieId} = useParams()
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
            .then(({data}) => setActors(data.cast))
    }, [])
    console.log(actors)

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        centerPadding:"60px",
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };
    return (
        <div className="p-5 container">

            <Slider {...settings}>
                {
                    actors?.map(el => (
                       <ActorCard el={el}/>
                    ))
                }
            </Slider>
        </div>
    );
};

export default ActorsPage;