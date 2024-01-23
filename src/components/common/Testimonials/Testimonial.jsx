import React from 'react'
import "./testimonial.css"
import StarRating from '../StarRating/StarRating'

const Testimonial = () => {
  return (
    <div className='testimonial'>Testimonial
        <div className='container'>Testimonial 2</div>
        <StarRating rating={5} />
    </div>
  )
}

export default Testimonial