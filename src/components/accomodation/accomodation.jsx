import Collapse from '../collapse/collapse'
import SlideShow from '../slideShow/slideShow'
import './accomodation.css'
import Rating from '../rating/rating'

function Accomodation({
  pictures,
  title,
  description,
  host,
  rating,
  location,
  equipments,
  tags,
}) {
  const hostNameSplit = host.name.split(' ')

  const firstName = hostNameSplit[0]

  const lastName = hostNameSplit[1]
  return (
    <div className="accomodation">
      <SlideShow pictures={pictures} />
      <div className="accomodation-txt">
        <div className="showing">
          <div className="name">
            <h2>{title}</h2>
            <p>{location}</p>
          </div>
          <ul className="tags-list">
            {tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="host-rating">
          <div className="host">
            <p>
              {firstName}
              <br />
              {lastName}
            </p>
            <img src={host.picture} alt="l'hôte" />
          </div>
          <div className="rating">
            <Rating rating={rating} />
          </div>
        </div>
      </div>
      <div className="description-equipments">
        <Collapse
          titre={'Description'}
          text={description}
          classText={'collapse-txt'}
          classTitle={'collapse-title'}
        />
        <Collapse
          titre={'Equipements'}
          text={equipments.map((itemEquipment, index) => (
            <li key={index}>{itemEquipment}</li>
          ))}
          classText={'collapse-txt'}
          classTitle={'collapse-title'}
        />
      </div>
    </div>
  )
}

export default Accomodation
