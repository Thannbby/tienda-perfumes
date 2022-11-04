import './ItemCount.css';
import React, {useState} from 'react';

export const ItemCount = ({stock, initial , onAdd}) => {
    const [count, setCount] = useState (initial);
  
    const decrementar = () =>{
      if(count>1){
         setCount(count-1)
      }
    }
    const incrementar = ()=> {
      if(count<stock){
        setCount(count+1)
      }
    }
  
  
    return (
      <div className='contador'>
           {/* <p>Stock disponible : {stock} </p> */}
           <div className="contenedor"> 
              <button disabled={stock === 0} onClick={decrementar} className= 'botoncontrol'>-</button>
              <p>{count}</p>
              <button disabled={stock === 0} onClick={incrementar} className= 'botoncontrol'>+</button>
           </div>
           <button disabled= {stock === 0} className= 'botonAgregar' onClick={()=>onAdd (count)}> Agregar al Carrito </button>
      </div>
    )
    
  }
  

// export const ItemCount = ({initial, stock, onAdd}) => {
// const [count, setCount] = useState(initial);

// const decrease = ()=>{
//     setCount(count - 1);
// }

// const increase = () => {
//     setCount (count + 1);
// }

//     return(
//     <div className = "contador" > 
//         {/* <img className="ImagCount" src={mywayedparmregalo} alt="ImagenCard"/> */}
//         <div>
//         <button disabled={count <=1 } onClick={decrease}>-</button>
//         <span>{count}</span>
//         <button disabled={count >= stock } onClick={increase} >+</button>
//         </div>
//             <div>
//                <button disabled ={stock <= 0} onClick={()=>onAdd (count)}>Agregar al carrito</button>
//            </div>
//    </div>
//     )
// }

// export default ItemCount;