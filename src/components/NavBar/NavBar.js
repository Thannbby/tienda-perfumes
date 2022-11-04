import {CartWidget} from '../CartWidget/CartWidget';
import "./NavBar.css";
import ImagenLogo from "../../asests/logomarca.jpg"
import { Link, NavLink } from "react-router-dom";

export const NavBar = ()=> {
    return(
        <nav className='menunav'>
            <img className='logo' src={ImagenLogo} alt='logo'/>
            <ul className="list">
                <NavLink className={({isActive}) =>isActive === true ?'claseActiva' : 'claseInactiva'}to="/">Inicio</NavLink>
                <NavLink className={({isActive}) =>isActive === true ?'claseActiva' : 'claseInactiva'} to="/category/mujer">Pefumes para Mujer</NavLink>
                <NavLink className={({isActive}) =>isActive === true ?'claseActiva' : 'claseInactiva'} to="/category/hombre" >Pefumes para Hombre</NavLink>   
                <NavLink className={({isActive}) =>isActive === true ?'claseActiva' : 'claseInactiva'} to="/category/regalo">Regalos</NavLink>
                <NavLink className={({isActive}) =>isActive === true ?'claseActiva' : 'claseInactiva'} to="/contacto">Contacto</NavLink>
            </ul>
            <Link to="/cart">
                <CartWidget/>
            </Link>
        </nav>
    )
}