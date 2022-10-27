import React, { useEffect, useState } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import lavieestbellaregalo from '../../asests/productos/laviebella-regalo.jpg';

const producto = [{id:1, title:"La Vie Est Belle", price:"$32.990", pictureUr1: lavieestbellaregalo, categoria:"Lacome"}]

export const ItemDetailContainer = () => {

const [data , setData] = useState ({})
useEffect (() => {
const getData = new Promise ( resolve => {
setTimeout (() => {
 resolve (producto);
}, 2000);
});
getData.then(res => setData(res));
}, [])

return (
 <ItemDetail data = {data} />
);
}

export default ItemDetailContainer;

