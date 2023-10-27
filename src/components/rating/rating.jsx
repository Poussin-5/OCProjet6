import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './rating.css'

function Rating({ rating }) {
  const tableRating = [1, 2, 3, 4, 5]
  const redStar = (
    <FontAwesomeIcon icon={faStar} size="xl" className="full-star" />
  )

  const greyStar = (
    <FontAwesomeIcon icon={faStar} size="xl" className="empty-star" />
  )

  return tableRating.map((ratingElem) =>
    rating >= ratingElem ? (
      <span key={ratingElem}>{redStar}</span>
    ) : (
      <span key={ratingElem}>{greyStar}</span>
    )
  )
}

export default Rating
