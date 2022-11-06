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
  

