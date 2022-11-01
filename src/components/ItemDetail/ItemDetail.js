import React from 'react';
import './ItemDetail.css';

export const ItemDetail = ({data}) => {
return (
    <div className='detail-container'>
        <p style={{width:"100%"}}>Detalle</p>
        <div className='img-container'>
            <img src={data.pictureUr1} alt={data.title}/>
        </div>
        <div className='img-container'>
            <h4>{data.title}</h4>
            <h5>${data.price}</h5>
        </div>
    </div>
);
}

export default ItemDetail;

