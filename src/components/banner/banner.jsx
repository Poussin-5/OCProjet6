import couv from '../../assets/couv-home.png'
import '../../style/home.css'

function Banner() {
  return (
    <div className="home-banner">
      <div className="home-banner-img">
        <img src={couv} alt="paysage de falaise en bord de mer" />
        <h1 className="home-banner-text">Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  )
}

export default Banner
