import { navLinks } from "../constant/index.js";
import cartIcon from "../../public/Assets/cart_icon.png";
import "../styles/Navbar.css";
import logo from "../../public/Assets/logo.png";

function Navbar() {
  return (
    <nav id="navbar_section">
      <div className="navbar_left">
        <img id="logo" src={logo} alt="" />
        <h1 className="navbar_logo">SHOPPER</h1>
      </div>
      <div className="navbar_links_container">
        {navLinks.map((navLink) => {
          return (
            <ul className="navbar_links">
              <li className="navbar_list">
                <a href={navLink.links}>{navLink.title}</a>
              </li>
            </ul>
          );
        })}
      </div>
      <div className="navbar_right">
        <button className="navbar_btn">Login</button>
        <img id="cartIcon" src={cartIcon} alt="Cart Icon" />
      </div>
    </nav>
  );
}

export default Navbar;
