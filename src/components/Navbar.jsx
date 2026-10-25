
import { Link } from "react-router-dom";
import logo1 from "../images/logo1.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  EN: {
    home: "Home",
    menu: "Menu",
    about: "About",
    gallery: "Gallery",
    contact: "Contact",
    reserve: "Reserve a Table",
  },
  OR: {
    home: "Mana",
    menu: "Nyaata",
    about: "Waa'ee Keenya",
    gallery: "Suuraa",
    contact: "Nu Qunnamaa",
    reserve: "Teessoo Qabadhaa",
  },
  "አማ": {
    home: "መነሻ",
    menu: "ምግብ",
    about: "ስለ እኛ",
    gallery: "ምስሎች",
    contact: "ያግኙን",
    reserve: "ጠረጴዛ ይያዙ",
  },
};

function Navbar() {
  const { cartCount } = useCart();
  const { language, changeLanguage } = useLanguage();
  const t = translations[language] || translations.EN;

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <img src={logo1} alt="Abbaa Gadaa Restaurant Logo" />
        <div className="logo-text">
          <h2>ABBAA GADAA</h2>
          <p>RESTAURANT</p>
        </div>
      </Link>

      <nav className="nav-links">
        <Link to="/">{t.home}</Link>
        <Link to="/menu">{t.menu}</Link>
        <Link to="/about">{t.about}</Link>
        <Link to="/gallery">{t.gallery}</Link>
        <Link to="/contact">{t.contact}</Link>
      </nav>

      <div className="nav-actions">
        <label className="language-select">
          <span className="sr-only">Choose language</span>
          <select
            value={language}
            onChange={(event) => changeLanguage(event.target.value)}
            aria-label="Choose website language"
          >
            <option value="EN">EN</option>
            <option value="OR">OR</option>
            <option value="አማ">አማ</option>
          </select>
          <ExpandMoreIcon />
        </label>

        <Link to="/cart" className="cart-btn" aria-label="Shopping cart">
          <AddShoppingCartIcon />
          <span className="cart-count">{cartCount}</span>
        </Link>

        <Link to="/contact" className="reserve-btn">
          {t.reserve}
          <span>↗</span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
