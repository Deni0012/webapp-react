import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import { useContext } from "react";
import { LoadContext } from "../contexts/LoadContext";
import { NavLink } from "react-router-dom";

export default function Movies() {

    const { load, setLoad } = useContext(LoadContext);

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const endPoint = ('http://127.0.0.1:3000/movies');

    function getMovies() {

        setLoad(true);
        axios.get(endPoint, {
            params: { search }
        })
            .then(res => {
                setMovies(res.data);
            })
            .catch(err => console.log(err))
            .finally(() => setLoad(false));
    };

    useEffect(getMovies, []);

    function searchMovies(event) {
        event.preventDefault();
        getMovies();
    };

    if (load === true) {
        return <div className="text-black">Loading...</div>
    };

    return <div>
        <h1 className="text-center mb-3 mt-3">Movies</h1>

        <div className="col-auto container d-flex justify-content-end">
            <NavLink to="/movies/new">
                <button className="btn btn-primary mb-3">Add new movies</button>

            </NavLink>

        </div>
        <section className="container">
            <h2 className="text-center">Best movies</h2>

            <form onSubmit={searchMovies} className="row g-1">

                <div className="col-auto">
                    <input type="text" className="form-control" id="inputPassword2" placeholder="Search movie"
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