import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-container">
          <div className="about-layout">
            <div className="about-text">
              <span className="about-eyebrow">
                OUR STORY · OUR CULTURE · OUR PASSION
              </span>

              <h1>
                More Than Food,
                <span> It's Our Heritage.</span>
              </h1>

              <p className="about-intro">
                Welcome to Abbaa Gadaa Restaurant, where authentic flavors,
                rich traditions, and warm hospitality come together to create
                unforgettable dining experiences.
              </p>

              <p className="about-description">
                Inspired by Ethiopian cuisine and Oromo culture, we believe
                every meal is an opportunity to bring people together.
                From sharing delicious dishes to welcoming every guest like
                family, we celebrate the traditions that make us who we are.
              </p>

              <div className="about-actions">
                <Link to="/menu" className="about-primary-btn">
                  Explore Our Menu <span>→</span>
                </Link>

                <Link to="/contact" className="about-secondary-btn">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="about-visual">
              <div className="about-decoration about-decoration-top" />
              <div className="about-feature-card">
                <span className="about-symbol">✦</span>
                <p className="about-card-label">THE HEART OF OUR TABLE</p>
                <h2>Tradition in Every Bite</h2>
                <p className="about-card-text">
                  Authentic flavors. Genuine hospitality. Memorable moments.
                </p>
                <div className="about-card-divider" />
                <span className="about-card-footer">
                  A TASTE OF ETHIOPIA
                </span>
              </div>
              <div className="about-decoration about-decoration-bottom" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-heading">
          <span>WHAT MAKES US SPECIAL</span>
          <h2>Our Values, Our Promise</h2>
          <p>
            Every detail reflects our love for food, culture, and people.
          </p>
        </div>

        <div className="about-values-grid">
          <article className="about-value-card">
            <span className="about-value-icon">✿</span>
            <h3>Authentic Flavors</h3>
            <p>
              Celebrate the distinctive tastes and culinary traditions
              of Ethiopia.
            </p>
          </article>

          <article className="about-value-card">
            <span className="about-value-icon">♡</span>
            <h3>Warm Hospitality</h3>
            <p>
              We strive to make every guest feel welcome, comfortable,
              and valued.
            </p>
          </article>

          <article className="about-value-card">
            <span className="about-value-icon">❋</span>
            <h3>Cultural Heritage</h3>
            <p>
              We honor the traditions and shared experiences that bring
              our community together.
            </p>
          </article>
        </div>
      </section>

      <section className="about-bottom">
        <p>GOOD FOOD. GREAT COMPANY. RICH TRADITION.</p>
        <h2>Come as a guest. Leave as family.</h2>
        <Link to="/contact" className="about-primary-btn">
          Visit Us <span>→</span>
        </Link>
      </section>
    </main>
  );
}

export default About;