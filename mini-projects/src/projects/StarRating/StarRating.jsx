import React, { useState } from 'react';

function StarRating({ maxRating = 5, onRatingChange,intialRating }) {
  const [rating, setRating] = useState(intialRating);
  const [hover, setHover] = useState(null);

  return (
    <div className="flex gap-1 select-none" onMouseLeave={() => setHover(null)}>
      {[...Array(maxRating)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <span
            key={starIndex}
            className={`text-2xl cursor-pointer ${
              starIndex <= (hover ?? rating) ? 'text-yellow-500' : 'text-gray-300'
            }`}
            onMouseOver={() => setHover(starIndex)}
            onClick={() => {
              setRating(starIndex);
              if (onRatingChange) {
                onRatingChange(starIndex);
              }
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
