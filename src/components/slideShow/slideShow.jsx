import prevImg from '../../assets/prev-img.svg'
import nextImg from '../../assets/next-img.svg'
import './slideShow.css'
import { useState } from 'react'

function SlideShow({ pictures }) {
  const images = pictures.map((image) => [image])
  const [slideNumber, setSlideNumber] = useState(1)
  const [activPic, setActivPic] = useState(0)

  if (images.length <= 1) {
    return (
      <div
        style={{ backgroundImage: `url(${images[activPic]})` }}
        className="slide-show-img"
      ></div>
    )
  } else {
    return (
      <div className="slide-show">
        <div
          style={{ backgroundImage: `url(${images[activPic]})` }}
          className="slide-show-img"
        >
          <div className="slide-show-button">
            <button
              onClick={
                slideNumber === 1
                  ? () => {
                      setSlideNumber(images.length)
                      setActivPic(images.length - 1)
                    }
                  : () => {
                      setSlideNumber(slideNumber - 1)
                      setActivPic(activPic - 1)
                    }
              }
              className="prev-img"
            >
              <img src={prevImg} alt="button précédent" />
            </button>
            <button
              onClick={
                slideNumber === images.length
                  ? () => {
                      setSlideNumber(1)
                      setActivPic(0)
                    }
                  : () => {
                      setSlideNumber(slideNumber + 1)
                      setActivPic(activPic + 1)
                    }
              }
              className="next-img"
            >
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
}

export default SlideShow
