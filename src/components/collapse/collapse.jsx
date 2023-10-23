import { useState } from 'react'
import './collapse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

function Collapse({ titre, text, classTitle, classText }) {
  const [isClose, setIsClose] = useState(true)
  const angleUp = <FontAwesomeIcon icon={faAngleUp} size="2xl" />

  return isClose ? (
    <div className="collapse close">
      <div className={classTitle}>
        <h2>{titre}</h2>
        <button
          onClick={() => {
            setIsClose(false)
          }}
        >
          {angleUp}
        </button>
      </div>
      <div className={classText}>
        <p>{text}</p>
      </div>
    </div>
  ) : (
    <div className="collapse open">
      <div className={classTitle}>
        <h2>{titre}</h2>
        <button
          onClick={() => {
            setIsClose(true)
          }}
        >
          {angleUp}
        </button>
      </div>
      <div className={classText}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Collapse
