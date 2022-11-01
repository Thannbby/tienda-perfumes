import React, { useEffect, useState } from 'react';
import {ItemDetail} from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {productos} from "../BaseDatos/BaseDatos";


export const ItemDetailContainer = () => {

const {id}=useParams();

const [data , setData] = useState ({})

useEffect (() => {
        const dataFiltered = productos.filter((elem) => elem.id === Number(id))
        setData(dataFiltered[0]);
},[id]);

return (
 <ItemDetail data={data}/>
);
}

export default ItemDetailContainer;
