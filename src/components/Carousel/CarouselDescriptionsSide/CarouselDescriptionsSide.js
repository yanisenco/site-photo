import { useEffect, useState } from 'react';
import ColorThief from 'colorthief';
import './carouselDescriptionsSide.css'
import apertureIcon from '../../../assets/icons/pictureIcons/apperture.png';
import apnIcon from '../../../assets/icons/pictureIcons/camera.png';
import shutterSpeedIcon from '../../../assets/icons/pictureIcons/chronometre.png';
import isoIcon from '../../../assets/icons/pictureIcons/iso.png';
import lensIcon from '../../../assets/icons/pictureIcons/lens.png';

const CarouselDescriptionsSide = props => {
    const {
      pictureSettings, 
      currentImg
    }=props
  
    const [dominantColor, setDominantColor] = useState([0,0,0]);
  
    useEffect(() => {
      const colorThief = new ColorThief();
      // Assurez-vous que l'image est chargée avant d'extraire la couleur
      if (currentImg.current) {
        currentImg.current.addEventListener('load', () => {
          const color = colorThief.getColor(currentImg.current);
          setDominantColor(color);
        });
      }
    }, []);


        return (
            <div style={{backgroundColor: `rgb(${dominantColor.join(', ')})`}}>
              <h1>{pictureSettings.title}</h1> 
                <p className='container'>
                  <img src={apnIcon} alt='' className='icon'/>
                   {' '}: {pictureSettings.apn}
                  </p>
                <p className='container'>
                  <img src={lensIcon} alt='' className='icon'/>
                  {' '}: {pictureSettings.lens}
                  </p>
                <p className='container'>
                  <img src={isoIcon} alt='' className='icon'/>
                  {' '}: {pictureSettings.iso}
                  </p>
                <p className='container'>
                  <img src={apertureIcon} alt='' className='icon'/>
                  {' '}: {pictureSettings.aperture}
                  </p>
                <p className='container'>
                  <img src={shutterSpeedIcon} alt='' className='icon'/>
                  {' '}: {pictureSettings.shutterSpeed}
                  </p>
            </div>
        );
      }
      
export default CarouselDescriptionsSide;