import Button from 'react-bootstrap/Button';
import {CartWidget} from '../CartWidget/CartWidget';
import "./NavBar.css";
import ImagenLogo from "../../asests/logomarca.jpg"

export const NavBar = ()=> {
    return(
        <nav className='menunav'>
            <img className='logo' src={ImagenLogo} alt='logo'/>
            <ul className="list">
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Marcas</a></li>
                <li><a href="/">Perfume para Hombre</a></li>
                <li><a href="/">Perfume para Mujer</a></li>
                <li><a href="/">Regalos</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}