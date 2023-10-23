import Banner from '../../components/banner/banner'
import Couv from '../../assets/couv-a-propos.png'
import Collapse from '../../components/collapse/collapse'

function Apropos() {
  return (
    <div className="a-propos">
      <Banner
        src={Couv}
        alt={'paysage de monstagne'}
        text={''}
        classDiv={'banner-img'}
        classOpacity={'opacity'}
      />
      <Collapse
        titre={'Fiabilité'}
        text={
          'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
        }
        classTitle={'collapse-title'}
        classText={'collapse-txt '}
      />
      <Collapse
        titre={'Recpect'}
        text={
          'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        }
        classTitle={'collapse-title'}
        classText={'collapse-txt'}
      />
      <Collapse
        titre={'Service'}
        text={
          'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        }
        classTitle={'collapse-title'}
        classText={'collapse-txt'}
      />
      <Collapse
        titre={'Sécurité'}
        text={
          "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
        classTitle={'collapse-title'}
        classText={'collapse-txt'}
      />
    </div>
  )
}

export default Apropos
