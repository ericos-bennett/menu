import { Link } from 'react-router-dom'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Create Recipe</Link>
          </li>
          <li>
            <Link to="/recipes">My List</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header