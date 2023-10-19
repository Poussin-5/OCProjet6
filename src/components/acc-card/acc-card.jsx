function Card({ cover, title }) {
  return (
    <div className="acc-card">
      <div className="acc-card-img">
        <img src={cover} alt="logement" />
        <h2 className="acc-card-text">{title}</h2>
      </div>
    </div>
  )
}

export default Card
