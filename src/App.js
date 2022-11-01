// import logo from './logo.svg';

import './App.css';
import {NavBar} from "./components/NavBar/NavBar.js";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer.js"
import {ContactoPage} from './components/ContactoPage/ContactoPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer fraganciaX="Perfumes para regalar"/>}/>
        <Route path="/category/:categoryId" element ={<ItemListContainer fraganciaX="Perfumes para regalar"/>}/>
        <Route path="/contacto" element={<ContactoPage/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        {/* <Route path="/perfume/:categoryId" element ={<ItemDetailContainer/>}/> */}
      </Routes>
      <footer className='footer'>Derechos reservados</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;