import React, { useState } from "react";

const HandleVote = ({ initialValue, onRate }) => {
    const [rating, setRating] = useState(initialValue || 0);

    const handleRate = (newRating) => {
        setRating(newRating);
        onRate(newRating);
    };

    return (
        <div className="ratingStars">
            {[1, 2, 3, 4, 5].map((value) => (
                <button
                    key={value}
                    className={`star ${value === rating ? "filled" : ""}`}
                    onClick={() => handleRate(value)}
                >
                    {value}
                </button>
            ))}
        </div>
    );
};

export default HandleVote;
