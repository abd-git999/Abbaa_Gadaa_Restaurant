import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Gallery.css";

const translations = {
  EN: {
    eyebrow: "OUR RESTAURANT",
    title: "Our Gallery",
    description:
      "Discover delicious food, warm hospitality, and memorable dining experiences at Abbaa Gadaa Restaurant.",
    images: [
      "Delicious Food",
      "Fresh Meals",
      "Restaurant Interior",
      "Grilled Specialties",
      "Fresh Ingredients",
      "Fine Dining",
    ],
  },

  OR: {
    eyebrow: "MANA NYAATAA KEENYA",
    title: "Suuraa Keenya",
    description:
      "Mana Nyaataa Abbaa Gadaa keessatti nyaata mi'aawaa, simannaa ho'aa fi muuxannoo nyaataa hin dagatamne argadhaa.",
    images: [
      "Nyaata Mi'aawaa",
      "Nyaata Haaraa",
      "Keessa Mana Nyaataa",
      "Nyaata Waadame",
      "Wantoota Nyaataa Haaraa",
      "Nyaata Sadarkaa Ol'aanaa",
    ],
  },

  "አማ": {
    eyebrow: "ምግብ ቤታችን",
    title: "የፎቶ ማዕከላችን",
    description:
      "በአባ ገዳ ምግብ ቤት ጣፋጭ ምግቦችን፣ ሞቅ ያለ አቀባበልን እና የማይረሱ የምግብ ልምዶችን ይወቁ።",
    images: [
      "ጣፋጭ ምግብ",
      "ትኩስ ምግቦች",
      "የምግብ ቤቱ ውስጣዊ ክፍል",
      "የተጠበሱ ምግቦች",
      "ትኩስ የምግብ ግብዓቶች",
      "ልዩ የምግብ አቀራረብ",
    ],
  },
};

function Gallery() {
  const { language } = useLanguage();
  const t = translations[language] || translations.EN;

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
    },
    {
      src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    },
    {
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    },
    {
      src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    },
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-heading">
        <span>{t.eyebrow}</span>
        <h2>{t.title}</h2>
        <p>{t.description}</p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img
              src={image.src}
              alt={t.images[index]}
              loading="lazy"
            />
            <div className="gallery-caption">
              <h3>{t.images[index]}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;