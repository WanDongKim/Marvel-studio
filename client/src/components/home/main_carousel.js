import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const MainCarousel = ({img, title, legend}) => {
    return (
        <div>
            <img src={img} alt={title}/>
            <p className="legend">{legend}</p>
        </div>
    )
}

export default MainCarousel;