import React from 'react'
import "./starrating.css"

const starSvgPath = "M12 .587l3.668 7.431 8.332 1.21-6.001 5.848 1.416 8.265-7.415-3.897-7.415 3.897 1.416-8.265-6.001-5.848 8.332-1.21L12 .587z";

const StarRating = ({ rating }) => {
  return (
    <div className='star-rating'>
        {[...Array(5)].map((_, index) => (
            <svg
                key={index}
                className={index < rating ? 'star filled' : 'star'}
                xmlns="http://www.w3.org/2000/svg"
                viewBox='0 0 24 24'
            >
                <path d={starSvgPath} />
            </svg>
        ))}
    </div>
  )
}

export default StarRating