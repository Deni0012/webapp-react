import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

export default function Movies() {

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const endPoint = ('http://127.0.0.1:3000/movies');

    function getMovies() {
        axios.get(endPoint, {
            params: {
                search
            }
        })
            .then(res => {
                setMovies(res.data);
                console.log(res.data)
            })
            .catch(err => console.log(err))
    };

    useEffect(getMovies, []);

    function searchMovies(event) {
        event.preventDefault();
        getMovies();
    }

    return <div>
        <h1 className="text-center mb-3 mt-3">Movies</h1>
        <section className="container">
            <h2 className="text-center">Best movies</h2>

            <form onSubmit={searchMovies} className="row g-1">

                <div className="col-auto">
                    <input type="text" className="form-control" id="inputPassword2" placeholder="Cerca film"
                        value={search} onChange={(e) => setSearch(e.target.value)}
                    />

                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Search movies</button>
                </div>
            </form>

            <div className="row g-3 container d-flex">
                {movies.length ? (
                    movies.map((movie) => (
                        <div className="col-12 col-md-4" key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))
                ) : (
                    <div>No movie found</div>
                )}
            </div>
        </section>
    </div>;

};