import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import StarRating from "./StarRating";
import axios from "axios";


export default function MovieReviews() {

    const { id } = useParams();
    const [movies, setMovies] = useState({});
    const [reviewData, setReviewData] = useState({
        username: "",
        description: ""
    });

    const endPointMovie = (`http://127.0.0.1:3000/movies/${id}`);

    function getMoviesId() {
        axios.get(endPointMovie)
            .then((res) => {
                setMovies(res.data);
            })
            .catch((error) => {
                console.error("Error loading movie:", error);
            });
    };

    useEffect(getMoviesId, [id]);

    function renderReviews() {
        if (!movies.reviews || movies.reviews.length === 0) {
            return <p>No reviews available.</p>;
        }

        return movies.reviews.map(rev => (
            <StarRating key={rev.id} data={rev} />
        ));
    }

    return <div className="container">
        <div className="d-flex flex-column align-items-center text-center">
            <h1 className="mt-3 mb-3">{movies.title}</h1>
            <h2 className="mt-3 mb-3">{movies.director}</h2>

            {movies.imagepath && (
                <img src={movies.imagepath} alt={movies.title} className="img-rev mt-3 mb-3" />
            )}
        </div>
        <h3 className="text-center mt-5 mb-5">Reviews</h3>
        <div>{renderReviews()}</div>

        <form className="mt-3 mb-3">
            <div className="mb-3">
                <label className="form-label">Add your name:</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label className="form-label">Leave a review!</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary p-2">Submit review!</button>
            </div>
        </form>



    </div>
};
