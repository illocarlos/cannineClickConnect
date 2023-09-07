import React, { useState } from "react";
import { Button } from "react-bootstrap"
import './ratingStars.css'

const HandleVote = ({ initialValue, onRate }) => {
    const [rating, setRating] = useState(initialValue || 0);

    const handleRate = (newRating) => {
        setRating(newRating);
        onRate(newRating);
    };

    return (
        <div className="ratingStars">
            {[1, 2, 3, 4, 5].map((value) => (
                <Button variant="secondary"
                    key={value}
                    className={`star ${value === rating ? "filled" : ""}`}
                    onClick={() => handleRate(value)}
                >
                    {value}
                </Button>
            ))}
        </div>
    );
};


export default HandleVote;
