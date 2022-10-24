import { useEffect, useState } from "react";
import './ItemListContainer.css';
import { ItemCount } from "../ItemCount/ItemCount.jsx";
import { ItemList } from "../ItemList/ItemList";

import lavieestbellaregalo from '../../asests/productos/laviebella-regalo.jpg';
import verygoodregalo from '../../asests/productos/verygood-regalo.jpg';
import heroesforchregalo from '../../asests/productos/heroe-regalo.jpg';
import mywayedparmregalo from '../../asests/productos/armani-regalo.jpg';


const productos = [
    {id:1, title:"La Vie Est Belle", price:"$32.990", pictureUr1: lavieestbellaregalo, categoria:"Lacome"},
    {id:2, title:"Very Good Carolina Herrera", price: "$27.890", pictureUr1: verygoodregalo, categoria:"Carolina Herrera"},
    {id:3, title:"212 HEROES FOR HER EDP", price: "$25.990", pictureUr1: heroesforchregalo, categoria: "Carolina Herrera"},
    {id:4, title:"MY WAY EDP ARMANI ", price:"$32.800", pictureUr1: mywayedparmregalo, categoria: "Armani"},
]

export const ItemListContainer = ({fraganciaX}) => {
    const [products, setProducts] =useState ([]);

    useEffect(()=>{
        const getProducts = new Promise (resolve => {
            setTimeout(()=>{
                resolve(productos)
            }, 2000);
        })
        getProducts.then(res => setProducts(res));
    },[]);


    const onAdd = (quantity) =>{
        alert(`Compraste ${quantity} unidades`);
    }
    

    return (
        <div className="contenedor">
            <div>{fraganciaX} </div>
            <ItemCount initial={0} stock={5} onAdd ={onAdd}/>
            <div className="carDs">
            <ItemList products={products} className="film"/>
            </div>
        </div>
    )
}