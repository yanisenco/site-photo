import {useEffect, useState, useRef} from 'react'
import Fraction from 'fraction.js';
import CarouselActions from "./CarouselActions/carouselActions";
import CarouselDescriptionsSide from "./CarouselDescriptionsSide/carouselDescriptionsSide";
import CarouselPicturesSide from "./CarouselPicturesSide/carouselPicturesSide";
import img1 from '../../assets/pictures/IMG_7827.jpg';
import img2 from '../../assets/pictures/IMG_6521.jpg';
import img3 from '../../assets/pictures/IMG_6622.jpg';
import img6 from '../../assets/pictures/IMG_7218.jpg';
import img7 from '../../assets/pictures/IMG_7330.jpg';
import img8 from '../../assets/pictures/IMG_7395.jpg';
import img9 from '../../assets/pictures/IMG_7426.jpg';
import img10 from '../../assets/pictures/IMG_8087.jpg';
import { getPicturesData } from '../../services/carousel.service';

const Carousel = () => {

const [pictureIndex, setPictureIndex]= useState(0);

const changePictureIndex = (increment) => {
  setPictureIndex((prevValeur) => {
    let newValue = prevValeur + increment;
    console.log(newValue)
    if (newValue <= 0) {
      newValue = 7;
    } else if (newValue >= 8) {
      newValue = 0;
    }
    
    return newValue;
  });
};

const [carouselContentObj, setCarouselContentObj] = useState([
    { img : img1, title: 'le poisson', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: '', dominantColor: [0,0,0]},
    { img : img2, title: 'la cigogne', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: '', dominantColor: [0,0,0]},
    { img : img3, title: 'les oies', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: '', dominantColor: [0,0,0]},
    { img : img6, title: 'le bouc', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: '', dominantColor: [0,0,0]},
    { img : img7, title: 'le piou-piou', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: '', dominantColor: [0,0,0]},
    { img : img8, title: 'les méduses', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: '', dominantColor: [0,0,0]},
    { img : img9, title: 'les algues', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: '', dominantColor: [0,0,0]},
    { img : img10, title: 'le jaja', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: '', dominantColor: [0,0,0]},
]);

let fraction = null;
useEffect(() => {
  const fetchPicturesData = async () => {
    const updatedCarouselContent = await Promise.all(
      carouselContentObj.map(async (content) => {
        const data = await getPicturesData({img: content.img});
          fraction = new Fraction(data.ExposureTime);
        return {
          ...content,
          iso: data.ISO,
          aperture: data.FNumber,
          shutterSpeed: fraction.toFraction(true),
          lens: data.LensModel,
          apn: data.Model
        };
      })
    );
    setCarouselContentObj(updatedCarouselContent);
  };
  fetchPicturesData();
}, [carouselContentObj]);

const currentImg = useRef(null);


    return ( 
      <div className='carousel'>
        <div className="slider-container">
            <div className="left-slide">
              <CarouselDescriptionsSide
              pictureSettings={carouselContentObj[pictureIndex]}
              picture={carouselContentObj[pictureIndex].img}
              currentImg={currentImg}
              />
            </div>
            <div className="right-slide">
              <CarouselPicturesSide
              picture={carouselContentObj[pictureIndex].img}
              currentImg={currentImg}
              />
            </div>
          <CarouselActions
          changePictureIndex={changePictureIndex}
          />
      </div>
    </div>
    );
  }
  
  export default Carousel;