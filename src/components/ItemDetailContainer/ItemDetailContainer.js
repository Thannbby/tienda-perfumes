import React, { useEffect, useState } from 'react';
import {ItemDetail} from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {productos} from "../BaseDatos/BaseDatos";

export const ItemDetailContainer = () => {
        const {id} = useParams();
        const [itemProduct , setItemProduct] = useState ({});
      
        const promesa = new Promise ((resolve, rejetct) =>{
          setTimeout(() =>{
            resolve (productos);
          }, 2000);
        })
      
        useEffect (()=>{
          const getProducto = async()=>{
            const productos = await promesa;
            const producto = productos.find((elem) => elem.id === Number(id));
            setItemProduct(producto);
          }
          getProducto();
        },[id])
      
        return (
          <div className='item-detail-container'>
               <p style={{width:"100%"}}> item detail container</p>
               <ItemDetail item={itemProduct}/>
          </div>
        )
      
      }
      





