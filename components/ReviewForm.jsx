import { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ movieId, onReviewAdded }) => {
    const [formData, setFormData] = useState({
        reviewerName: '',
        reviewText: '',
        rating: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSend = {
            name: formData.reviewerName,
            text: formData.reviewText,
            vote: formData.rating,
        };

        axios.post(`http://127.0.0.1:3000/movies/${movieId}`, dataToSend)
            .then(() => {
                setFormData({
                    reviewerName: '',
                    reviewText: '',
                    rating: '',
                });

                if (onReviewAdded) {
                    onReviewAdded();
                }
            })
            .catch((error) => {
                console.error('Error sunmitting review:', error);
            });
    };

    return (
        <div className="review-form-container">
            <h3>Add a review</h3>
            <form className="review-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="reviewerName">Name:</label>
                    <input
                        type="text"
                        id="reviewerName"
                        name="reviewerName"
                        value={formData.reviewerName}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="reviewText">Review:</label>
                    <textarea
                        id="reviewText"
                        name="reviewText"
                        rows="4"
                        value={formData.reviewText}
                        onChange={handleChange}
                        placeholder="Write your review"
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="rating">Vote:</label>
                    <select
                        id="rating"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a grade</option>
                        <option value="1">1 - Terrible</option>
                        <option value="2">2 - Poor</option>
                        <option value="3">3 - Discrete</option>
                        <option value="4">4 - Good</option>
                        <option value="5">5 - Excellent</option>
                    </select>
                </div>

                <button type="submit" className="submit-button">Submit review</button>
            </form>
        </div>
    );
};

export default ReviewForm;