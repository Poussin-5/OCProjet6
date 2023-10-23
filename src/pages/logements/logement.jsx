import Banner from '../../components/banner/banner'
import Couv from '../../assets/couv-a-propos.png'

function Logement() {
  return (
    <Banner
      src={Couv}
      alt={'paysage de monstagne'}
      text={''}
      classDiv={'propos-banner-img'}
      classText={'propos-banner-txt'}
      classOpacity={'opacity'}
    />
  )
}

export default Logement
