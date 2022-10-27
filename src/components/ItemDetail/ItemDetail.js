import React from 'react';
import './ItemDetail.css';

export const ItemDetail = ({data}) => {
return (
<div className="container"> 
< div className="detail" >
< img className='detail_image'  src={ data.pictureUr1} alt={data.tittle}/>
<div className= "content" > 
<h4>{data.tittle} </h4>
<h5>{data.price}</h5>
</ div>
</div >
 </div >
);
}

export default ItemDetail;

