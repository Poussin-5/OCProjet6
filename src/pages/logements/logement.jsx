import { useParams } from 'react-router-dom'
import logement from '../../data/logement.json'
import Accomodation from '../../components/accomodation/accomodation'

function Logement() {
  const { idAccomodation } = useParams()

  return (
    <ul>
      {logement.map(
        ({
          id,
          title,
          pictures,
          description,
          host,
          rating,
          location,
          equipments,
          tags,
        }) =>
          id === idAccomodation ? (
            <div key={id}>
              <Accomodation
                pictures={pictures}
                title={title}
                host={host}
                description={description}
                rating={rating}
                location={location}
                equipments={equipments}
                tags={tags}
              />
            </div>
          ) : null
      )}
    </ul>
  )
}

export default Logement
