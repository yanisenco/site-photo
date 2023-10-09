import { Fragment } from "react";


const CarouselPicturesSide = props => {
    const {
        picture,
        currentImg
    }=props

        return (
            <Fragment>
                <img ref={currentImg} src={picture} alt="Description de l'image" />
            </Fragment>
        );
      }
      
export default CarouselPicturesSide;