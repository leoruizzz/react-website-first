import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import {Link} from "react-router-dom"; 
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder'; //Significa que podemos utilizarlo como componente
//{} indica que quieres agregar codigo de javascript

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false); //OpenLinks es el nombre de la variable

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo}/>
        <div className="hiddenLinks">
        <Link to ="/"> Home </Link>
        <Link to ="/menu"> Menu </Link>
        <Link to ="/about"> About </Link>
        <Link to ="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to ="/"> Home </Link>
        <Link to ="/menu"> Menu </Link>
        <Link to ="/about"> About </Link>
        <Link to ="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
        <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar; 