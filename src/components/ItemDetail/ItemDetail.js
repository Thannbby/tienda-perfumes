import React from 'react';
import './ItemDetail.css';
import {ItemCount} from "../ItemCount/ItemCount";
import { useContext } from 'react';
import {CartContext} from "../../context/CartContext";
import { text } from '@fortawesome/fontawesome-svg-core';

export const ItemDetail = ({item})=> {

    const {addProducts} = useContext (CartContext)
  
    const addProduct = (quantity) =>{
      addProducts(item, quantity);
    }
  
    return (
      <div className='detail-container'>
           <p className='parrafo'>Detalle del Producto</p>
           <div>
                <img src={item.pictureUr1} alt={item.title}/>
           </div>
           <div className='img-container'>
                <h4>{item.title}</h4>
                <h5>{item.price}</h5>
           </div>
           <div>
           <ItemCount stock={10} initial={1} onAdd={addProduct}/>
           </div>
           
      </div>
    )
    
  }
  
  





