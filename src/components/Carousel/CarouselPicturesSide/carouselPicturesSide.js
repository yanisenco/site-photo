import { Fragment } from "react";


const CarouselPicturesSide = props => {
    const {picture}=props
        return (
            <Fragment>
                <img src={picture} alt="Description de l'image" />
            </Fragment>
        );
      }
      
export default CarouselPicturesSide;