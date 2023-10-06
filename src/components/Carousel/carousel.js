import {useState} from 'react'
import CarouselActions from "./CarouselActions/CarouselActions";
import CarouselDescriptionsSide from "./CarouselDescriptionsSide/CarouselDescriptionsSide";
import CarouselPicturesSide from "./CarouselPicturesSide/carouselPicturesSide";
import CarouselContent from "./carouselContent";
import exifr from 'exifr';
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


const Carousel = async () => {


const [pictureIndex, setPictureIndex]= useState(0);

const incrementPictureIndex = () => setPictureIndex(pictureIndex + 1);
const decrementPictureIndex = () => setPictureIndex(pictureIndex - 1);



const [CarouselContentObj, setCarouselContentObj] = useState([
    { img : img1, title: '', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img2, title: '', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img3, title: '', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img4, title: '', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img5, title: '', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img6, title: '', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img7, title: '', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img8, title: '', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img9, title: '', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : img10, title: '', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
]);

const getPicturesData = async(image) => {
    return await exifr.parse(image.img, ['ISO', 'FNumber', 'LensModel', 'ExposureTime', 'Model'])
}
const obj = await CarouselContentObj.map(async (image) => {
    await getPicturesData(image);
});

console.log('obj', obj)

    return (
      <div className="slider-container">
      <div className="left-slide">
        <CarouselDescriptionsSide/>
        </div>
      <div className="right-slide">
        <CarouselPicturesSide/>
        
      </div>
      <CarouselActions
      incrementPictureIndex={incrementPictureIndex}
      decrementPictureIndex={decrementPictureIndex}
      />
    </div>
    );
  }
  
  export default Carousel;