import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import  MenuItemDetail from './components/MenuItemDetail';
import {BrowserRouter as Router, Route,Routes } from "react-router-dom";

//Colocar las rutas
///Se utiliza el switch para renderizar una ruta por una.
//Dentro del switch se definene las paginas y rutas que queremos utlizar en  la pagina
//"Path" es el destino o la direccion de las rutas

function App() {
  return ( 
  <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu/:itemName" element={MenuItemDetail}/>
        
      </Routes>
      <Footer/>
    </Router>
  </div>
  );
}

export default App;