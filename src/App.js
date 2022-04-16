import React from 'react';
import Header from "./components/Header";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import NowPlaying from "./pages/NowPlaying";
import Upcoming from "./pages/Upcoming";
import Latest from "./pages/Latest";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Todo from "./Todo/Todo";
import ActorBio from "./pages/ActorBio";
import SearchResults from "./pages/SearchResults";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Todo/>}/>
                <Route path="/Popular" element={<Popular/>}/>
                <Route path="/TopRated" element={<TopRated/>}/>
                <Route path="/NowPlaying" element={<NowPlaying/>}/>
                <Route path="/Upcoming" element={<Upcoming/>}/>
                <Route path="/Latest" element={<Latest/>}/>
                <Route path="/movie/:id" element={<MovieDetailsPage/>}/>
                <Route path="/actors/:actorId" element={<ActorBio/>}/>
                <Route path="/movies/search-results/:movieName" element={<SearchResults/>}/>
            </Routes>
        </div>
    );
};

export default App;
