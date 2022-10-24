import { Item } from "../Item/Item";
import './ItemList.css'; 

export const ItemList = ({products = []}) => {
    return (
        products.map(productos=> <Item Key={productos.id} info={productos}/>
        )
    )
}
