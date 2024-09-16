import React, { useState, useEffect } from "react";
import Movieui from "./movieUI";
import './movieUI.css'
export default function MovieList() {
    const [movies, setMovies] = useState([]);

    const fetchMovie = async () => {
        try {
            const response = await fetch('https://omdbapi.com/?s=starwars&apikey=263d22d8');
            const data = await response.json();
            if (data.Search) {
                setMovies(data.Search);
            }
            else{
                console.log()
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovie();
    }, [movies]);

    return (
        <ul className="MovieList">
            {movies.map((movie) => (
                <Movieui key={movie.imdbID} title={movie.Title} year={movie.Year} />
            ))}
        </ul>
    );
}
