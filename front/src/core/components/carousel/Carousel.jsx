import React, { useState, useRef, useEffect } from "react";

import './Carousel.scss';

const Carrusel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const imageWidth = useRef(0);

  useEffect(() => {
    imageWidth.current = carouselRef.current.children[0].offsetWidth;
  }, [images]);
  

  return (
    
    <div ref={carouselRef} className="carousel">

        {images.map((image, index) => (
            <div key={index} className={`carousel__item ${currentSlide === index ? "carousel__item--active" : ""}`} style={{ transform: `translateX(-${currentSlide * imageWidth.current}px)` }}>
            <img
                src={image.src}
                alt={image.alt}
                className="carousel__item__image"
            />
            <div className="carousel__item__content">
                <h3>{image.title}</h3>
                <p>{image.year}</p>
            </div>
            </div>
        ))}
        
</div>


  );
};

export default Carrusel;
