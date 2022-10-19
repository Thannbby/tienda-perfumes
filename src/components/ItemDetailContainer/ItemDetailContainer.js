// import { useState, useEffect} from "react";
// import './ItemDetailContainer.css';
// import {arregloProductos} from "../../basesDatos/baseDatos";
// import { ItemDetail } from "../ItemDetail/ItemDetail";
// import {useParams} from "react-router-dom";

// export const ItemDetailContainer= () => {
//     const {id} = useParams (); 
//     const [itemProduct, setItemProduct] = useState ({});

//     const promesa = new Promise ((resolve, reject) => {
//         setTimeout ( ( ) => {
//               resolve (arregloProductos);
//    }, 2000);
// })

// useEffect (()=>{
//     const getProducto = async () =>{
//         const productos = await promesa ();
//         console.log ('producto', producto)
//         const producto = productos.find (elemento => elemento.id === parseInt(id));
//         console.log ("producto", producto)
//         setItemProduct (producto)
//     }
// getProducto()
// }, [id])

// console.log('item', item)
// return(
//     <div className="item-detail-container">
//         <p style={{width:"100%", color: "beige"}}>Item detail container</p>
//        <ItemDetail item = {itemProduct}/>
//     </div>
// )
// }