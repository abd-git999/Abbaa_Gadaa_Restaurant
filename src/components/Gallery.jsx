import React from "react";
import "./Gallery.css";

function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
      title: "Delicious Food",
    },
    {
      src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
      title: "Fresh Meals",
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      title: "Restaurant Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
      title: "Grilled Specialties",
    },
    {
      src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
      title: "Fresh Ingredients",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      title: "Fine Dining",
    },
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-heading">
        <span>OUR RESTAURANT</span>
        <h2>Our Gallery</h2>
        <p>
          Discover delicious food, warm hospitality, and memorable dining
          experiences at Abbaa Gadaa Restaurant.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image.src} alt={image.title} loading="lazy" />
            <div className="gallery-caption">
              <h3>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;