import prevImg from '../../assets/prev-img.svg'
import nextImg from '../../assets/next-img.svg'
import './slideShow.css'

function SlideShow({ pictures }) {
  const images = pictures.map((image) => [image])
  const slideNumber = 1
  console.log(images)
  return (
    <div className="slide-show">
      <div
        style={{ backgroundImage: `url(${images[1]})` }}
        className="slide-show-img"
      >
        <div className="slide-show-button">
          <button className="prev-img">
            <img src={prevImg} alt="button précédent" />
          </button>
          <button className="next-img">
            <img src={nextImg} alt="button suivant" />
          </button>
        </div>
      </div>
      <div className="slide-number">
        <span>
          {slideNumber}/{images.length}
        </span>
      </div>
    </div>
  )
}

export default SlideShow
