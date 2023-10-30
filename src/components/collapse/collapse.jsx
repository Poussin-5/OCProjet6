import { useState } from 'react'
import './collapse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

function Collapse({ titre, text, classTitle, classText }) {
  const [isClose, setIsClose] = useState(true)
  const angleUp = <FontAwesomeIcon icon={faAngleUp} size="2xl" />

  return (
    <div className={`collapse ${isClose ? 'close' : 'open'}`}>
      <div className={classTitle}>
        <h2>{titre}</h2>
        <button
          onClick={() => {
            setIsClose(!isClose)
          }}
        >
          {angleUp}
        </button>
      </div>
      <div className={classText}>
        <ul>{text}</ul>
      </div>
    </div>
  )
}

export default Collapse
