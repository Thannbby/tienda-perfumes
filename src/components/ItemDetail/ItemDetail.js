import React from 'react';
import './ItemDetail.css';
import {ItemCount} from "../ItemCount/ItemCount";
import { useContext } from 'react';
import {CartContext} from "../../context/CartContext";

export const ItemDetail = ({item})=> {

    const {addProducts} = useContext (CartContext)
  
    const addProduct = (quantity) =>{
      addProducts(item, quantity);
    }
  
    return (
      <div className='detail-container'>
           <p style = {{width: "100%"}}> item detail </p>
           <div>
                <img src={item.pictureUr1} alt={item.title}/>
           </div>
           <div className='img-container'>
                <h4>{item.title}</h4>
                <h5>{item.price}</h5>
           </div>
           <ItemCount stock={10} initial={1} onAdd={addProduct}/>
      </div>
    )
    
  }
  
  





