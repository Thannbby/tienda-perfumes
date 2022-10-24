import logo from './logo.svg';

import './App.css';
import {NavBar} from "./components/NavBar/NavBar.jsx";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer.js";
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <ItemListContainer fraganciaX="Perfumes para regalar"/>
      <footer>Derechos reservados</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;