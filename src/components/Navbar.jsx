import { Link } from "react-router-dom";
import logo1 from '../images/logo1.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCart } from "../context/CartContext";
function Navbar() {
  const { cartCount } = useCart();
  return (

    <header className="navbar">
      
      {/* Restaurant Logo */}
      <Link to="/" className="logo">
       <img src={logo1} alt="Abbaa Gadaa Restaurant Logo" />

        <div className="logo-text">
          <h2>ABBAA GADAA</h2>
          <p>RESTAURANT</p>
        </div>
      </Link>

      {/* Navigation Links */}
      
<nav className="nav-links">
  <Link to="/">Home</Link>
  <Link to="/menu">Menu</Link>
  <Link to="/about">About</Link>
  <Link to="/gallery">Gallery</Link>
  <Link to="/contact">Contact</Link>
</nav>


      {/* Right Side Actions */}
      <div className="nav-actions">
        <button className="language-btn" type="button">
          EN <span><ExpandMoreIcon/></span> OR
        </button>

     <Link to="/cart" className="cart-btn">
  <AddShoppingCartIcon />
  <span className="cart-count">{cartCount}</span>
</Link>

       <Link to="/contact" className="reserve-btn">
  Reserve a Table
  <span>↗</span>
</Link>
      </div>
    </header>
  );
}

export default Navbar;