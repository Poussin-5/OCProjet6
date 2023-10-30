import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/LOGO.png'
import './header.css'

function Header() {
  const { pathname } = useLocation()

  return (
    <nav>
      <h1>
        <Link to="/">
          <img src={logo} alt="kasa" />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/" className={`${pathname === '/' ? 'underline' : null}`}>
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/a-propos"
            className={`${pathname === '/a-propos' ? 'underline' : null}`}
          >
            À propos
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
