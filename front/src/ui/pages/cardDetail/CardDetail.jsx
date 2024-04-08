import React from 'react'
import BtnFav from '../../../core/components/btn/BtnFav';
import ExampleChar from '../../../resources/img/example-char.png';
import Carrusel from '../../../core/components/carousel/Carousel';


import Comic1 from '../../../resources/img/comics/comic_1.jpg';
import Comic2 from '../../../resources/img/comics/comic_2.jpg';
import Comic3 from '../../../resources/img/comics/comic_3.jpg';
import Comic4 from '../../../resources/img/comics/comic_4.jpg';
import Comic5 from '../../../resources/img/comics/comic_5.jpg';
import Comic6 from '../../../resources/img/comics/comic_6.jpg';
import Comic7 from '../../../resources/img/comics/comic_7.jpg';
import Comic8 from '../../../resources/img/comics/comic_8.jpg';



import './CardDetail.scss';

const CardDetail = () => {

    const images = [
        { src: Comic1, alt: "image-1", title:"Who is...? Adam Warlock Infinity Comic #1", year:"1967"},
        { src: Comic2, alt: "image-2", title:"Who is...? Adam Warlock Infinity Comic #1", year:"1967" },
        { src: Comic3, alt: "image-3", title:"Who is...? Adam Warlock Infinity Comic #1", year:"1967" },
        { src: Comic4, alt: "image-4", title:"Who is...? Adam Warlock Infinity Comic #1", year:"1967" },
        { src: Comic5, alt: "image-5", title:"Who is...? Adam Warlock Infinity Comic #1", year:"1967" },
        { src: Comic6, alt: "image-6", title:"Who is...? Adam Warlock Infinity Comic #1", year:"1967" },
        { src: Comic7, alt: "image-7", title:"Who is...? Adam Warlock Infinity Comic #1", year:"1967" },
        { src: Comic8, alt: "image-8", title:"Who is...? Adam Warlock Infinity Comic #1", year:"1967" }
      ];
    

  return (
    <div className="container-card-detail">
        <header className='card-detail-header'>
            <div className="card-detail-header__img-info">
                <img className='card-detail-header__img-info-character-img' src={ExampleChar} alt="example-char" />
                <div className="card-detail-header__img-info-info-character">
                    <div className="card-detail-header__img-info-info-character-name-fav">
                        <h4 className="card-detail-header__img-info-info-character-name">Adam Warlock</h4>
                        <BtnFav hideCounter="true" />
                    </div>
                    <p className='card-detail-header__img-info-info-character-info'>
                        Created by the Enclave to be part of a race of super humans who would abolish war, illness, and crime, Adam Warlock is a unique being who uses his immense and formidable powers to safeguard the universe.
                    </p>
                </div>
            </div>
        </header>

    <div className="container-comics">
        <h4>COMICS</h4>
        <Carrusel images={images} />
    </div>


    </div>
  )
}

export default CardDetail;