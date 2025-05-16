import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function AddMovie() {
    const [formData, setFormData] = useState({
        title: '',
        director: '',
        genre: '',
        abstract: '',
        image: null
    });

    const navigate = useNavigate();

    const sendForm = (e) => {
        e.preventDefault();

        if (!formData.image) {
            alert("Per favore, carica un'immagine.");
            return;
        }

        axios.post("http://127.0.0.1:3000/movies", formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                setFormData({
                    title: '',
                    director: '',
                    genre: '',
                    abstract: '',
                    image: null
                });
                navigate("/movies");
            })
            .catch(err => {
                console.error("Errore nel salvataggio:", err);
            });
    };

    return <div className="bg-dark text-white add-heigth">
        <div className="container">
            <form className="mb-3" onSubmit={sendForm}>
                <h1 className="text-center mb-4">Add a movie</h1>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label text-warning">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="director" className="form-label text-warning">Director</label>
                    <input
                        type="text"
                        className="form-control"
                        id="director"
                        name="director"
                        value={formData.director}
                        onChange={(e) => setFormData({ ...formData, director: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="genre" className="form-label text-warning">Type</label>
                    <input
                        type="text"
                        className="form-control"
                        id="genre"
                        name="genre"
                        value={formData.genre}
                        onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="abstract" className="form-label text-warning">Plot</label>
                    <textarea
                        className="form-control"
                        id="abstract"
                        name="abstract"
                        rows="3"
                        value={formData.abstract}
                        onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label text-warning">Poster</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                        accept="image/*"
                    />
                </div>

                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary p-2 mb-3">
                        Add Movie
                    </button>
                </div>
            </form>
        </div>
    </div>
};