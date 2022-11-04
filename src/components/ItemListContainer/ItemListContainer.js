import { useEffect, useState } from "react";
import './ItemListContainer.css';
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {productos} from "../BaseDatos/BaseDatos";

export const ItemListContainer = ({fraganciaX}) => {
    
    const {categoryId}=useParams();
    const [products, setProducts] =useState ([]);

    useEffect(()=>{
        const getProducts = new Promise (resolve => {
            setTimeout(()=>{
                resolve(productos)
            }, 1000);
        })
        getProducts.then(res => {
            if(categoryId){
                const productsFiltered = res.filter(elm=>elm.categoria === categoryId);
                setProducts(productsFiltered);
            }else{
                setProducts(res)
            }
});
    },[categoryId]);
    
    return (
        <div className="contenedor">
            <div>{fraganciaX} </div>
            <div className="carDs">
            <ItemList products={products} className="film"/>
            </div>
        </div>
    )
}