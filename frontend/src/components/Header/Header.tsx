import { Link } from 'react-router-dom'
import './Header.css'
import { Typography } from '@mui/material'

export const Header: React.FC = () => {
  return (
    <header>
      <Typography variant="body1">
        <Link to="/">enPlace</Link>
      </Typography>
      <nav>
        <Typography variant="body1">
          <Link to="/recipes">My Recipes</Link>
        </Typography>
        <Typography variant="body1">
          <Link to="/">Login</Link>
        </Typography>
      </nav>
    </header>
  )
}
