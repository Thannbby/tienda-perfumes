import './CompraCarrito.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { baseDatos } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc} from "firebase/firestore";
import Form from 'react-bootstrap/Form';

export const CompraCarrito = ()=>{

    const value = useContext(CartContext);

    const {productosCarrito, getTotalPrice, removeItem}= value;

    const enviarPedido = (evt) =>{
      evt.preventDefault();
      // console.log(evt.target[0,1,2].value)
      const compra ={
        buyer:{
          name: evt.target[0].value,
          phone: evt.target[1].value,
          email: evt.target[2].value
        },
        items: productosCarrito,
        total:getTotalPrice()
      }
      const queryRef = collection (baseDatos, "compras")
      addDoc(queryRef, compra).then((resultado)=>console.log(resultado))
    }

    const actualizar = ()=>{
      const queryRef = doc (baseDatos, "items", "Mb2U74FLFh2NTeQ0IpHB");
      updateDoc(queryRef,{price:120}).then(()=>console.log("bien")).catch((error)=>console.log("error"))
    } 

    return(
      <div className='contenedorcarrito' >
         <p>Productos seleccionados</p>
         <div className='contenedor-producto' style={{width:"500px", border:"1px solid pink"}}>
            {
              productosCarrito.map((producto)=>(
                <div>
                   <h3>{producto.title}</h3>
                   <p>Precio unitario {producto.price}</p>
                   <p>Cantidad {producto.quantity}</p>
                   <p>Precio por cantidad {producto.quantityPrice}</p>
                   <button oClick={()=>removeItem(producto.id)}> Eliminar </button>
                </div>
              ))
            }
            <p> <strong> Precio Total: </strong> {getTotalPrice()} </p>
         </div>
         <form onSubmit={enviarPedido} className='contenedor-form' >
               <label>Nombre</label>
               <input type="text" placeholder="Nombre"/>
               <label>Teléfono</label>
               <input type="tel" placeholder="Teléfono" />
               <label>Correo</label>
               <input type="email" placeholder="Ingrese su correo" />
               <button type="submit" >Enviar Pedido</button>
            </form>
         {/* <button onClick={actualizar}>Actualizar Producto</button> */}
      </div>
    )
  
}