import './imageTextePresentation.css'

const ImageTextePresentation = (props) => {
    const{
        img, 
        description,
        position
    }=props


        return (
          <div>
            <img src={img} className={position === 'right' ? 'img-shape-right': 'img-shape-left'} alt=''/>
            <p className='desc'>{description}</p>
          </div>
        );
      }
      
export default ImageTextePresentation;