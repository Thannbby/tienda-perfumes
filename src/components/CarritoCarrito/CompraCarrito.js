import { useContext } from "react"
import { CartContext } from "../../context/CartContext";

export const CompraCarrito = ()=>{

    const value = useContext(CartContext);

    const {productosCarrito, getTotalPrice}= value;
  
    return(
      <div>
         <p>Carrito</p>
         <div style={{width:"500px", border:"1px solid pink"}}>
            {
              productosCarrito.map((producto)=>(
                <div>
                   <h3>{producto.title}</h3>
                   <p>Precio unitario {producto.price}</p>
                   <p>Cantidad {producto.quantity}</p>
                   <p>Precio por cantidad {producto.quantityPrice}</p>
                </div>
              ))
            }
            <p> <strong> Precio Total: </strong> {getTotalPrice()} </p>
         </div>
      </div>
    )
  
}