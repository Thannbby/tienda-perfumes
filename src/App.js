// import logo from './logo.svg';

import './App.css';
// import {NavBar} from "./components/NavBar/NavBar.jsx";
// import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer.js";
import {BrowserRouter} from "react-router-dom";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer.js"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <NavBar/>
      <ItemListContainer fraganciaX="Perfumes para regalar"/>
      <footer>Derechos reservados</footer> */}
      <ItemDetailContainer/>
    </div>
    </BrowserRouter>
  );
}

export default App;