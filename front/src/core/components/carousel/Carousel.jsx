import React, { useRef, useEffect, useState } from "react";
import "./Carousel.scss";
import { buildComicsApiUrl } from "../../../adapters/api/buildApiUrl";
import useFetchDataComicId from "../../../adapters/api/useFetchComicId";
import Loader from "../loader/Loader";

const Carousel = ({ characterId }) => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const { comics, isLoading, error } = useFetchDataComicId(
    buildComicsApiUrl(characterId)
  ); // Eliminamos la destructuración de data

  useEffect(() => {
    if (carouselRef.current && comics.length > 0) {
      // Aseguramos que comics tenga al menos un elemento
      setImageWidth(carouselRef.current.children[0].offsetWidth || 0);
    }
  }, [comics]);

  return (
    <div className="carousel" ref={carouselRef}>
      {" "}
      {/* Añadimos el ref al div del carrusel */}
      {isLoading && (
        <div>
          {console.log('Loader is rendering')}
          <Loader />
        </div>
      )}
      {!isLoading &&
        !error &&
        comics &&
        comics.length > 0 &&
        comics.map((comic, index) => {
          const imageUrl = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
          return (
            <div
              key={index}
              className={`carousel__item ${currentSlide === index ? "carousel__item--active" : ""}`}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <img
                src={imageUrl}
                alt={comic.title}
                className="carousel__item__image"
              />
              <div className="carousel__item__content">
                <h3>{comic.title}</h3>
              </div>
            </div>
          );
        })}
      {error && <div>Error: {error.message}</div>}
      {!isLoading && !error && comics && comics.length === 0 && (
        <div>No hay cómics disponibles.</div>
      )}
    </div>
  );
};

export default Carousel;
