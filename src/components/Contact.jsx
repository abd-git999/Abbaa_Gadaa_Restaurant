
import logo1 from '../images/logo1.png';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import LocationPinIcon from '@mui/icons-material/LocationPin';

function Contact() {
  return (
    <header className="new-navbar">
      {/* Restaurant Logo */}
      <a href="/" className="logo">
        <img src={logo1} alt="Abbaa Gadaa Restaurant Logo" />

        <div className="logo-text">
          <h2>ABBAA GADAA</h2>
          <p>RESTAURANT</p>
        </div>
      </a>

      {/* Quick Links */}
      <div className="new-nav-quick-links">
        <h3>Quick Links</h3>
             
        <nav className="new-nav-links">
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/about">About</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
          <a href="/cart">Cart</a>
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
   <div className="ag-footer-bottom">
        <div className="ag-footer-ornament">
          ✦ ━ ◆ ━ ✧ ━ ◈ ━ ✦ ━ ◆ ━ ✧ ━ ◈ ━ ✦
        </div>

        <p>
          © 2026 <strong>Abbaa Gadaa Restaurant.</strong>
          {" "}All Rights Reserved.
        </p>

        <p className="ag-footer-credit">
          Designed & Developed by
          <span> Abdisa Siraj Abuni</span>
        </p>

        <p className="ag-footer-motto">
          Proudly celebrating Oromo culture and Ethiopian hospitality.
        </p>
      </div>
    </header>
  );
}

export default Contact;
