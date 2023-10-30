import { useParams } from 'react-router-dom'
import logement from '../../data/logement.json'
import Accomodation from '../../components/accomodation/accomodation'
import Error from '../error/error'

function Logement() {
  const { idAccomodation } = useParams()

  const foundId = logement.find(
    (accomodation) => accomodation.id === idAccomodation
  )

  if (!foundId) {
    return <Error />
  }
  return (
    <div key={foundId.id}>
      <Accomodation
        pictures={foundId.pictures}
        title={foundId.title}
        host={foundId.host}
        description={foundId.description}
        rating={foundId.rating}
        location={foundId.location}
        equipments={foundId.equipments}
        tags={foundId.tags}
      />
    </div>
  )
}

export default Logement
