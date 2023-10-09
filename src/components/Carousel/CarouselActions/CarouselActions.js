const CarouselActions = (props) => {
    const{changePictureIndex}=props

    const handleOnChange = (increment) => changePictureIndex(increment); 
        return (
          <div className="action-buttons">
            <button className="up-button" onClick={()=>handleOnChange(1)}>
              <i className="fa-solid fa-arrow-up"></i>
            </button>
            <button className="down-button"  onClick={()=>handleOnChange(-1)}>
              <i className="fa-solid fa-arrow-down"></i>
            </button> 
          </div>
        );
      }
      
export default CarouselActions;