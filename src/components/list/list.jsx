import Card from '../card/card'
import './list.css'

function List({ item, classes }) {
  return (
    <div>
      <ul className={classes}>
        {item.map(({ id, cover, title }) => (
          <Card
            key={id}
            classOpacity={'opacity'}
            cover={cover}
            title={title}
            classesImg={'acc-list-img'}
            classesText={'acc-list-txt'}
          />
        ))}
      </ul>
    </div>
  )
}

export default List
