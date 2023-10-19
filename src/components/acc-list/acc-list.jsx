import { accList } from '../../logement'
import Card from '../acc-card/acc-card'

function List() {
  return (
    <div>
      <ul className="acc-list">
        {accList.map(({ id, cover, title }) => (
          <div key={id}>
            <Card cover={cover} title={title} />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default List
