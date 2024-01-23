import React from 'react';

import Photo1 from "../../../assets/images/grid-image-1.png"
import Photo2 from "../../../assets/images/grid-image-2.png"
import Photo3 from "../../../assets/images/grid-image-3.png"
import Photo4 from "../../../assets/images/grid-image-4.png"
import Photo5 from "../../../assets/images/grid-image-5.png"

import "./testimonial.css"

const PhotoGrid = () => {
  return (
    <div className="photo-grid">
      <div className="photo photo-top photo-top-left">
        <img src={Photo1} alt="Top Left" />
      </div>
      <div className="photo photo-top photo-top-right">
        <img src={Photo2} alt="Top Right" />
      </div>
      <div className="photo photo-bottom photo-bottom-left">
        <img src={Photo3} alt="Bottom Left" />
      </div>
      <div className="photo photo-bottom photo-bottom-middle">
        <img src={Photo4} alt="Bottom Middle" />
      </div>
      <div className="photo photo-bottom photo-bottom-right">
        <img src={Photo5} alt="Bottom Right" />
      </div>
    </div>
  );
};

export default PhotoGrid;
