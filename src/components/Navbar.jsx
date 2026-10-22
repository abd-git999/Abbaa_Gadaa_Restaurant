
import logo1 from '../images/logo1.png'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Navbar() {
  return (

    <header className="navbar">
      
      {/* Restaurant Logo */}
      <a href="/" className="logo">
       <img src={logo1} alt="Abbaa Gadaa Restaurant Logo" />

        <div className="logo-text">
          <h2>ABBAA GADAA</h2>
          <p>RESTAURANT</p>
        </div>
      </a>

      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/about">About</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
      </nav>

      {/* Right Side Actions */}
      <div className="nav-actions">
        <button className="language-btn" type="button">
          EN <span>►</span>
        </button>

       <a href="/cart" className="cart-btn">
  <AddShoppingCartIcon />
</a>

        <a href="/contact" className="reserve-btn">
          Reserve a Table
          <span>↗</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;