import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () => {
    return(
        <>
        <FontAwesomeIcon icon={faUser}/>
        <FontAwesomeIcon icon= {faCartShopping}/>
        <span></span>
        </>
    )
 }