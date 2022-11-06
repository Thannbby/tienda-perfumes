import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export const CartWidget = () => {

    const {getTotalProductos}= useContext (CartContext);

    return(
        <>
        {/* <FontAwesomeIcon icon={faUser}/> */}
        <FontAwesomeIcon style={{backgroundColor: 'white', bordeRadius: '50%', width: '20px'}} icon= {faCartShopping}/>
        <span style={{backgroundColor: 'white', bordeRadius: '50%', width: '10px', height: '10px', fontSize:"10px", color: "black" }}></span>
        </>
    )
 }