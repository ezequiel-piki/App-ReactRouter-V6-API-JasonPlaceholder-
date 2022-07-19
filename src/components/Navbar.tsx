import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { UserContext as Ezequiel } from '../context/UserProvider';


const Navbar = () => {
  const {user}:any = useContext(Ezequiel);
  
  return (
    <nav className="navbar navbar-dark bg-dark">
    <div className="container">
    <Link    to='/'                      >{user ? 'Ezequiel':'sin conexion'}</Link>
    <NavLink to='/'         className="btn btn-outline-warning">Inicio      </NavLink>
    <NavLink to='/blog'     className="btn btn-outline-warning">Blog        </NavLink>
    <NavLink to='/contacto' className="btn btn-outline-warning">Contacto    </NavLink>
    </div>
    </nav>
  )
}

export default Navbar