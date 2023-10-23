import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO.png'
import './header.css'

function Header() {
  return (
    <nav>
      <h1>
        <Link to="/">
          <img src={logo} alt="kasa" />
        </Link>
      </h1>
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
