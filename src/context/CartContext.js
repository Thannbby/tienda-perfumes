import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

  const isInCart = (id) =>{
    const productoExists = productosCarrito.some((elem)=>elem.id === id);
    return productoExists;
  }

  const [productosCarrito, setProductosCarrito] = useState([]);

  const addProducts = (item, quantity) =>{

    const productosCarritoCopy = [...productosCarrito];

    if(isInCart(item.id)){
      const posProduct = productosCarritoCopy.findIndex((elem)=> elem.id === item.id )
      productosCarritoCopy[posProduct].quantity += quantity;
      productosCarritoCopy[posProduct].quantityPrice = productosCarritoCopy
      [posProduct].quantity*productosCarritoCopy [posProduct].price;
      setProductosCarrito(productosCarritoCopy);

    } else {
      const newProduct={
        ...item,
        quantity:quantity,
        quantityPrice:quantity*item.price,
      };
  
      productosCarritoCopy.push(newProduct);
      setProductosCarrito(productosCarritoCopy);
    }
    
    }

    const  getTotalPrice = ()=>{
        const precioTotal = productosCarrito.reduce((acc,curr)=> acc + curr.quantityPrice, 0);
        return precioTotal;
    }

    const getTotalProdutos =()=>{
        const totalProdutos = productosCarrito.reduce((acc,curr)=> acc + curr.quantity, 0);
        return totalProdutos;
    }

    const removeItem = (id)=>{
      const newProducts = productosCarrito.filter((elemento)=>elemento.id !== id);
      setProductosCarrito(newProducts);
    }


  return(
    <CartContext.Provider value= {{productosCarrito, addProducts, getTotalPrice, getTotalProdutos, removeItem}}>
      {children}
    </CartContext.Provider>
  )
}
