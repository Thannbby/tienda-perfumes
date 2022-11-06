
import { useEffect, useState } from "react";
import './ItemListContainer.css';
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import {baseDatos} from "../../utils/firebase";
import { collection, getDocs, query, where} from "firebase/firestore";

export const ItemListContainer = ({fraganciaX}) => {
    
    const {categoryId} = useParams();
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect(()=>{

const queryRef = categoryId ?  query(collection(baseDatos, "items"), where ("categoria","==",categoryId)) : collection(baseDatos,"items");

getDocs(queryRef).then((response)=>{
  const results = response.docs;
  const docs = results.map(doc=>{
    return{
      ...doc.data(),
      id:doc.id
    }
  });
 //  console.log(docs);
 setProducts(docs);
 setLoading(false);
 });
},[categoryId])
    
    return (
        <div className="contenedor">
            <div>{fraganciaX} </div>
            <div className="carDs">
            {
              loading ? 
              <p>Cargando...</p>
              :
              <div><ItemList products={products} className="film"/></div>
            } 
            </div>
        </div>
    )
}


