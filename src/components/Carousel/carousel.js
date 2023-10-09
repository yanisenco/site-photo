import {useEffect, useState} from 'react'
import CarouselActions from "./CarouselActions/CarouselActions";
import CarouselDescriptionsSide from "./CarouselDescriptionsSide/CarouselDescriptionsSide";
import CarouselPicturesSide from "./CarouselPicturesSide/carouselPicturesSide";
import CarouselContent from "./carouselContent";
import img1 from '../../assets/pictures/IMG_7827.jpg';
import img2 from '../../assets/pictures/IMG_6521.jpg';
import img3 from '../../assets/pictures/IMG_6622.jpg';
import img4 from '../../assets/pictures/IMG_6956.jpg';
import img5 from '../../assets/pictures/IMG_7036.jpg';
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
      newValue = 9;
    } else if (newValue >= 10) {
      newValue = 0;
    }
    
    return newValue;
  });
};

const [carouselContentObj, setCarouselContentObj] = useState([
    { img : img1, title: '1', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img2, title: '2', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img3, title: '3', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img4, title: '4', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img5, title: '5', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img6, title: '6', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img7, title: '7', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img8, title: '8', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img9, title: '9', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img10, title: '10', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
]);

useEffect(() => {
  const fetchPicturesData = async () => {
    const updatedCarouselContent = await Promise.all(
      carouselContentObj.map(async (content) => {
        const data = await getPicturesData({img: content.img});
        return {
          ...content,
          iso: data.ISO,
          aperture: data.FNumber,
          shutterSpeed: data.ExposureTime,
          lens: data.LensModel,
          apn: data.Model
        };
      })
    );
    setCarouselContentObj(updatedCarouselContent);
  };
  fetchPicturesData();
}, []);


    return (
      <div className="slider-container">
      <div className="left-slide">
        <CarouselDescriptionsSide
        pictureSettings={carouselContentObj[pictureIndex]}
        />
        </div>
      <div className="right-slide">
        <CarouselPicturesSide
        picture={carouselContentObj[pictureIndex].img}
        />
        
      </div>
      <CarouselActions
      changePictureIndex={changePictureIndex}
      />
    </div>
    );
  }
  
  export default Carousel;