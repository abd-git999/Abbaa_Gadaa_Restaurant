

   import image1 from "../images/image1.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={image1} alt="Abaa Gadaa Restaurant Logo" />

        <div className="footer-text">
          <h3>
            Designed and Developed by{" "}
            <span>Abdisa Siraj Abuni</span>
          </h3>

          <p>
            <span>“Where Tradition Meets Taste.”</span>
            <br />
            © 2026 Abaa Gadaa Restaurant. All Rights Reserved.
            <br />
            Proudly celebrating Oromo culture and Ethiopian hospitality.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;