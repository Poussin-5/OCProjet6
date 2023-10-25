import './card.css'
import { Link } from 'react-router-dom'

function Card({ cover, id, title, classesImg, classesText, classOpacity }) {
  return (
    <Link to={`/logement/${id} `} className={classesImg}>
      <div className={classOpacity}></div>
      <img src={cover} alt="logement" />
      <p className={classesText}>{title}</p>
    </Link>
  )
}

export default Card
