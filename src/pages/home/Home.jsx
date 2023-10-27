import Banner from '../../components/banner/banner'
import List from '../../components/list/list'
import couv from '../../assets/couv-home.png'
import logement from '../../data/logement.json'

function Home() {
  return (
    <div className="home-content">
      <Banner
        classOpacity={'opacity'}
        src={couv}
        alt={'paysage bord de mer avec falaise'}
        text={'Chez vous, partout et ailleurs'}
        classDiv={'banner-img'}
        classText={'home-banner-text'}
      />
      <List item={logement} classes={'acc-list'} />
    </div>
  )
}

export default Home
