import {useState} from 'react'
import EXIF from 'exif-js';
import CarouselActions from "./CarouselActions/CarouselActions";
import CarouselDescriptionsSide from "./CarouselDescriptionsSide/CarouselDescriptionsSide";
import CarouselPicturesSide from "./CarouselPicturesSide/carouselPicturesSide";
import CarouselContent from "./carouselContent";
import img1 from '../../assets/pictures/IMG_7827.JPG';

const Carousel = () => {

// // Get references to HTML elements
// const sliderContainer = document.querySelector(".slider-container");
// const slidesLeft = document.querySelector(".left-slide");
// const slidesRight = document.querySelector(".right-slide");
// const upButton = document.querySelector(".up-button");
// const downButton = document.querySelector(".down-button");

// // Calculate the total number of slides
// // const slidesLength = slidesRight.querySelectorAll("div").length;
// const slidesLength = 3;

// // Initialize the active slide index
// let activeSlidesIndex = 0;

// // Set initial position for left slides
// slidesLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// // Add click event listeners to up and down buttons
// upButton.addEventListener("click", () => changeSlide("up"));
// downButton.addEventListener("click", () => changeSlide("down"));

// // Function to change the active slide
// const changeSlide = (direction) => {
//   const sliderHeight = sliderContainer.clientHeight;
//   if (direction === "up") {
//     activeSlidesIndex++;
//     if (activeSlidesIndex > slidesLength - 1) {
//       activeSlidesIndex = 0;
//     }
//   } else if (direction === "down") {
//     activeSlidesIndex--;
//     if (activeSlidesIndex < 0) {
//       activeSlidesIndex = slidesLength - 1;
//     }
//   }

//   // Update the transform property to change the slide position
//   slidesRight.style.transform = `translateY(-${
//     activeSlidesIndex * sliderHeight
//   }px)`;
//   slidesLeft.style.transform = `translateY(${
//     activeSlidesIndex * sliderHeight
//   }px)`;
// };

const [pictureIndex, setPictureIndex]= useState(0);

const incrementPictureIndex = () => setPictureIndex(pictureIndex + 1);
const decrementPictureIndex = () => setPictureIndex(pictureIndex - 1);



function obtenirInfosDePriseDeVue(imageFile) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
  
      fileReader.onload = function () {
        const image = new Image();
        image.src = fileReader.result;
  
        image.onload = function () {
          EXIF.getData(image, function () {
            const exifData = EXIF.getAllTags(this);
            resolve(exifData);
          });
        };
  
        image.onerror = function () {
          reject("Erreur lors du chargement de l'image");
        };
      };
  
      fileReader.onerror = function () {
        reject("Erreur lors de la lecture du fichier");
      };
  console.log(fileReader.readAsDataURL(imageFile))
    //   fileReader.readAsDataURL(imageFile);
    });
  }
  
  // Exemple d'utilisation :
obtenirInfosDePriseDeVue(img1)
    .then((exifData) => {
    console.log("Métadonnées EXIF de l'image :", exifData);
    })
    .catch((error) => {
    console.error("Erreur :", error);
    });

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