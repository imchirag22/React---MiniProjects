import React from 'react'
import { useState } from 'react';
import Star from './Star';


const StarRating = ({ totalStars = 5, onRate }) => {

    const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (idx) => setHoverRating(idx);
  const handleMouseLeave = () => setHoverRating(0);
  const handleClick = (idx) => {
    setRating(idx);
    if (onRate) onRate(idx);
  };

  return (
    <div className="flex space-x-1">
    {Array.from({ length: totalStars }, (_, i) => {
      const idx = i + 1;
      return (
        <Star
          key={idx}
          filled={hoverRating >= idx || (!hoverRating && rating >= idx)}
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(idx)}
        />
      );
    })}
  </div>
  )
}

export default StarRating

  