import './ItemCount.css';
import React, {useState} from 'react';
import mywayedparmregalo from '../../asests/productos/armani-regalo.jpg';

export const ItemCount = ({initial, stock, onAdd}) => {
const [count, setCount] = useState(initial);

const decrease = ()=>{
    setCount(count - 1);
}

const increase = () => {
    setCount (count + 1);
}

    return(
    <div className = "contador" > 
        <img className="ImagCount" src={mywayedparmregalo} alt="ImagenCard"/>
        <div>
        <button disabled={count <=1 } onClick={decrease}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock } onClick={increase} >+</button>
        </div>
            <div>
               <button disabled ={stock <= 0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
           </div>
   </div>
    )
}

export default ItemCount;