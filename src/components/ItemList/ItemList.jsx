import { Item } from "../Item/Item";
import './ItemList.css'; 

export const ItemList = ({products = []}) => {
    return (
        products.map(productos=> <Item key={productos.id} info={productos}/>
        )
    )
}
