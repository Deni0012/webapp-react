import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function Homepage() {

    const [movies, setMovies] = useState([]);

    const endPoint = ('http://127.0.0.1:3000/movies');

    function getMovies() {
        axios.get(endPoint)
            .then(res => {
                setMovies(res.data);
            })
            .catch(err => console.log(err))
    };

    useEffect(getMovies, []);


    return <div className="min-vh-100">
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold">🎬 Welcome to CineBlog 🎬</h1>
                <p className="lead">
                    Discover the latest releases, memorable classics and films most loved by cinema audiences.
                </p>
            </div>

            <NavLink to="/movies" className=" btn btn-primary btn-lg mt-3">Explore movies</NavLink>
        </div>

        <h2 className="mb-4 text-center">✨ Featured Movies ✨</h2>
        <div className="row g-4">
            {movies.length ? (
                movies
                    .filter(movie => movie.avg_vote > 4.2)
                    .map((movie) => (
                        <div className="col-12 col-md-4" key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))
            ) : (
                <div>No movie found</div>
            )}

        </div>
    </div>


}