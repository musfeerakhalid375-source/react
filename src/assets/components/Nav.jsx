import { useState } from "react";
import image2 from '../../assets/images/tp_logo.svg'// apna logo path

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <div className="navbar">

      {/* LEFT empty (balance ke liye) */}
      <div className="nav-left"></div>

   
      <div className="logo">
        <img src={image2} alt="logo" />
      </div>
{/* .........................................toggle menu............ */}
     
      <div className="nav-right">
        <div
          className="global-language"
          onClick={() => setLangOpen(!langOpen)}
        >
          <i class="fa-solid fa-globe "   aria-hidden="true" style={{fontSize:'25px' , paddingTop:'0.3rem'}}></i>
        </div>

        {/* ☰ MENU ICON */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* 🌍 LANGUAGE MENU */}
      {langOpen && (
        <div className="dropdown language ">
          <ul>
            <li>English</li>
            <li>Spanish</li>
            <li>French</li>
          </ul>
        </div>
      )}

      {/* ☰ MAIN MENU */}
      {menuOpen && (
        <div className="dropdown menu">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Industries</li>
            <li>Product</li>
            <li>Get In Touch</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
