import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO.png'
import '../../style/header.css'

function Header() {
  return (
    <nav>
      <div>
        <Link to="/">
          <img src={logo} alt="kasa" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/a-propos">À propos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header