const CarouselActions = (props) => {
    const{
        incrementPictureIndex,
         decrementPictureIndex
        }=props
        
    const handleNext = () => incrementPictureIndex(); 
    const handlePrevious = () => decrementPictureIndex(); 
        return (
          <div className="action-buttons">
            <button className="up-button" onClick={handleNext}>
              <i className="fa-solid fa-arrow-up"></i>
            </button>
            <button className="down-button"  onClick={handlePrevious}>
              <i className="fa-solid fa-arrow-down"></i>
            </button> 
          </div>
        );
      }
      
export default CarouselActions;