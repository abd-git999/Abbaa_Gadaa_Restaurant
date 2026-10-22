
import heroImage from "../images/restaurant-hero.png";

function Hero() {
  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-label">
          AUTHENTIC ETHIOPIAN DINING
        </span>

        <h1>
          A Taste of Tradition.
          <br />
          <span>A Feast of Culture.</span>
        </h1>

        <p>
          Discover authentic flavors, rich heritage, and
          the warmth of Oromo hospitality at Aba Gadaa
          Restaurant.
        </p>

        <div className="hero-buttons">
          <a href="/menu" className="hero-primary">
            Explore Our Menu →
          </a>

          <a href="/contact" className="hero-secondary">
            Book a Table
          </a>
        </div>

        <div className="hero-note">
          ✦ Tradition · Quality · Hospitality
        </div>
      </div>
    </section>
  );
}

export default Hero;
