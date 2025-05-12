import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    const { id, title, director, imagepath, abstract } = movie;

    return <div className="card">
        <img src={imagepath} className="w-50 mx-auto" alt={title} />
        <div className="card-body g-3">
            <h5 className="card-title">{title}</h5>
            <p>Director: <strong>{director}</strong></p>
            <p className="card-text">{abstract}</p>
            <Link to={`/movies/${id}`} className="btn btn-primary mt-4">Movies profile</Link>
        </div>
    </div>
};