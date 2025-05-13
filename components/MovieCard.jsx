import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {

    function stars(vote) {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < vote) {
                stars.push(<i key={i} className="fa-solid fa-star stars-color"></i>)
            } else {
                stars.push(<i key={i} className="fa-regular fa-star stars-color"></i>)
            }
        } return stars;
    }

    const { id, title, director, imagepath, abstract, avg_vote } = movie;

    return <div className="card">
        <img src={imagepath} className="w-50 mx-auto" alt={title} />
        <div className="card-body g-3">
            <h5 className="card-title">{title}</h5>
            <p>Director: <strong>{director}</strong></p>
            <p className="card-text">{abstract}</p>
            <p className="card-text">Average rating:{stars(avg_vote)}</p>
            <Link to={`/movies/${id}`} className="btn btn-primary mt-4">Movies profile</Link>
        </div>
    </div>
};