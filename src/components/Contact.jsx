
import logo1 from '../images/logo1.png';
import { Link } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationPinIcon from '@mui/icons-material/LocationPin';

function Contact() {
  return (
    <footer className="new-navbar" id="contact">

      {/* Restaurant Logo */}
      <Link to="/" className="logo">
        <img src={logo1} alt="Abbaa Gadaa Restaurant Logo" />

        <div className="logo-text">
          <h2>ABBAA GADAA</h2>
          <p>RESTAURANT</p>
        </div>
      </Link>

      {/* Quick Links */}
      <div className="new-nav-quick-links">
        <h3>Quick Links</h3>

        <nav className="new-nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>

      {/* Contact Information */}
      <div className="new-nav-contact">
        <h3>Contact Us</h3>

        <div className="new-nav-actions">
          <a
            href="tel:+251969416675"
            className="CallIcon-btn"
          >
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

          <a
            href="mailto:abdisasaba2@gmail.com"
            className="MailIcon-btn"
          >
            <MailIcon />
            <span>abdisasaba2@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Social Media */}
      <div className="new-nav-follow">
        <h3>Follow Us</h3>

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

        <p>Good Food. Good People. Great Memories.</p>
      </div>

      {/* Footer Bottom */}
      <div className="ag-footer-bottom">
        <div className="ag-footer-ornament">
          ✦ ━ ◆ ━ ✧ ━ ◈ ━ ✦ ━ ◆ ━ ✧ ━ ◈ ━ ✦
        </div>

        <p>
          © 2026 <strong>Abbaa Gadaa Restaurant.</strong>
          {' '}All Rights Reserved.
        </p>

        <p className="ag-footer-credit">
          Designed &amp; Developed by
          <span> Abdisa Siraj Abuni</span>
        </p>

        <p className="ag-footer-motto">
          Proudly celebrating Oromo culture and Ethiopian hospitality.
        </p>
      </div>

    </footer>
  );
}

export default Contact;
