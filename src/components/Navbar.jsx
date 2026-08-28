import "./Navbar.css";
import { Link } from "react-router-dom";
// import Shop from "./src/pages/Shop";
{
  /* <Route path="/shop" element={<Shop />} /> */
}
// import logo from "../assets/logo.png";

import { FiUser, FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GBbPe-7CBOSeRnm6SXdwGcNzFS8TmFHKJGzKBmJGBw&s=10"
          alt="logo"
        />
        <h2>Furniro</h2>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <a href="/Blog">Blog</a>
          </li>
          <li>
            <a href="/Comparison">About</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="icons">
        <Link to="/#">
          <FiUser />
        </Link>
        <Link to="/Product">
          <AiOutlineProduct />
        </Link>
        <FiSearch />
        <Link to="/Comparison">
        <FiHeart />
        </Link>
        <Link to="/Cart">
        <FiShoppingCart />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
