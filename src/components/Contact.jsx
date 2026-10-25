import logo1 from "../images/logo1.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import LocationPinIcon from "@mui/icons-material/LocationPin";

const translations = {
  EN: {
    quickLinks: "Quick Links",
    home: "Home",
    menu: "Menu",
    about: "About",
    gallery: "Gallery",
    contact: "Contact",
    cart: "Cart",
    contactUs: "Contact Us",
    followUs: "Follow Us",
    tagline: "Good Food. Good People. Great Memories.",
    rights: "All Rights Reserved.",
    designed: "Designed & Developed by",
    motto: "Proudly celebrating Oromo culture and Ethiopian hospitality.",
  },

  OR: {
    quickLinks: "Geessituuwwan Ariifachiisaa",
    home: "Mana",
    menu: "Baafata Nyaataa",
    about: "Waa'ee Keenya",
    gallery: "Suuraa",
    contact: "Nu Qunnamaa",
    cart: "Gaarii Nyaataa",
    contactUs: "Nu Qunnamaa",
    followUs: "Nu Hordofaa",
    tagline: "Nyaata Gaarii. Namoota Gaarii. Yaadannoo Gaarii.",
    rights: "Mirgi Hunduu Seeraan Eegama.",
    designed: "Kan Qopheessee fi Guddise",
    motto: "Aadaa Oromoo fi simannaa Itoophiyaa boonsaan kabajna.",
  },

  "አማ": {
    quickLinks: "ፈጣን አገናኞች",
    home: "መነሻ",
    menu: "ምናሌ",
    about: "ስለ እኛ",
    gallery: "ምስሎች",
    contact: "ያግኙን",
    cart: "የግዢ ቅርጫት",
    contactUs: "ያግኙን",
    followUs: "ይከተሉን",
    tagline: "ጥሩ ምግብ። ጥሩ ሰዎች። ድንቅ ትዝታዎች።",
    rights: "መብቶች በሙሉ የተጠበቁ ናቸው።",
    designed: "የነደፈውና ያበለጸገው",
    motto: "የኦሮሞ ባህልንና የኢትዮጵያን አቀባበል በኩራት እናከብራለን።",
  },
};

function Contact() {
  const { language } = useLanguage();
  const t = translations[language] || translations.EN;

  return (
    <footer className="new-navbar" id="contact">
      <Link to="/" className="logo">
        <img src={logo1} alt="Abbaa Gadaa Restaurant Logo" />

        <div className="logo-text">
          <h2>ABBAA GADAA</h2>
          <p>RESTAURANT</p>
        </div>
      </Link>

      <div className="new-nav-quick-links">
        <h3>{t.quickLinks}</h3>

        <nav className="new-nav-links">
          <Link to="/">{t.home}</Link>
          <Link to="/menu">{t.menu}</Link>
          <Link to="/about">{t.about}</Link>
          <Link to="/gallery">{t.gallery}</Link>
          <Link to="/contact">{t.contact}</Link>
          <Link to="/cart">{t.cart}</Link>
        </nav>
      </div>

      <div className="new-nav-contact">
        <h3>{t.contactUs}</h3>

        <div className="new-nav-actions">
          <a href="tel:+251969416675" className="CallIcon-btn">
            <CallIcon />
            <span>+251 969 416 675</span>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Bulbula%2C%20Oromia%2C%20Ethiopia"
            target="_blank"
            rel="noopener noreferrer"
            className="LocationPinIcon-btn"
          >
            <LocationPinIcon />
            <span>Bulbula, Oromia, Ethiopia</span>
          </a>

          <a href="mailto:abdisasaba2@gmail.com" className="MailIcon-btn">
            <MailIcon />
            <span>abdisasaba2@gmail.com</span>
          </a>
        </div>
      </div>

      <div className="new-nav-follow">
        <h3>{t.followUs}</h3>

        <div className="social-icons">
          <a
            href="https://www.facebook.com/profile.php?id=100086257735839"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>

          <a
            href="https://www.tiktok.com/@be_musli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <MusicNoteIcon />
          </a>

          <a
            href="https://www.youtube.com/@Kuran_sound"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <YouTubeIcon />
          </a>
        </div>

        <p>{t.tagline}</p>
      </div>

      <div className="ag-footer-bottom">
        <div className="ag-footer-ornament">
          ✦ ━ ◆ ━ ✧ ━ ◈ ━ ✦ ━ ◆ ━ ✧ ━ ◈ ━ ✦
        </div>

        <p>
          © 2026 <strong>Abbaa Gadaa Restaurant.</strong>{" "}
          {t.rights}
        </p>

        <p className="ag-footer-credit">
          {t.designed}
          <span> Abdisa Siraj Abuni</span>
        </p>

        <p className="ag-footer-motto">{t.motto}</p>
      </div>
    </footer>
  );
}

export default Contact;