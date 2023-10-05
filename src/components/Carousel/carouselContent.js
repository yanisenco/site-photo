import EXIF from 'exif-js';

import img1 from '../../assets/pictures/IMG_7827.JPG';

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
  
      fileReader.readAsDataURL(imageFile);
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
  


export const CarouselContent = [
    { img : img1, title: '', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : '', title: '', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
    { img : '', title: '', iso : '', aperture : '', shutterSpeed : '', lens : '', apn: ''},
]