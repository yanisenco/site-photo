import { useEffect, useState } from "react";
import Fraction from 'fraction.js';

const CarouselDescriptionsSide = props => {
    const {pictureSettings}=props
    const divStyle ={
          "background-color":"#7f7856"
    };  

    // const [fraction, setFraction] = useState(null);
    // const [frac, setFrac] = useState(null);

    // useEffect(()=>{
    // const newFraction = new Fraction(pictureSettings.shutterSpeed);
    // setFraction(newFraction);
    // setFrac(fraction.toFraction(true))
    // },[pictureSettings])
    // console.log(frac)

    
        return (
            <div style={divStyle}>
              <h1>{pictureSettings.title}</h1> 
                <p>apn : {pictureSettings.apn}</p>
                <p>lens : {pictureSettings.lens}</p>
                <p>iso : {pictureSettings.iso}</p>
                <p>aperture : {pictureSettings.aperture}</p>
                <p>shutterSpeed : {pictureSettings.shutterSpeed}</p>
            </div>
        );
      }
      
export default CarouselDescriptionsSide;