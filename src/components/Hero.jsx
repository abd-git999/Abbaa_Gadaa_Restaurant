
import heroImage from "../images/restaurant-hero.png";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  EN: {
    label: "AUTHENTIC ETHIOPIAN DINING",
    title: "A Taste of Tradition.",
    subtitle: "A Feast of Culture.",
    description:
      "Discover authentic flavors, rich heritage, and the warmth of Oromo hospitality at Aba Gadaa Restaurant.",
    menu: "Explore Our Menu →",
    book: "Book a Table",
    note: "✦ Tradition · Quality · Hospitality",
  },

  OR: {
    label: "NYAATA DHUGAA ITOOPHIYAA",
    title: "Dhandhama Aadaa.",
    subtitle: "A Booda Aadaa.",
    description:
      "Mi'a nyaata dhugaa, dhaala aadaa badhaadhaa fi simannaa ho'aa Oromoo mana nyaataa Aba Gadaa keessatti argadhaa.",
    menu: "Baafata Nyaataa Ilaali →",
    book: "Teessoo Qabadhaa",
    note: "✦ Aadaa · Qulqullina · Simannaa",
  },

  "አማ": {
    label: "እውነተኛ የኢትዮጵያ ምግብ",
    title: "የባህል ጣዕም።",
    subtitle: "የባህል ድግስ።",
    description:
      "በአባ ገዳ ምግብ ቤት እውነተኛ ጣዕሞችን፣ የበለጸገ ቅርስን እና የኦሮሞን ሞቅ ያለ አቀባበል ይወቁ።",
    menu: "ምናሌያችንን ይመልከቱ →",
    book: "ጠረጴዛ ይያዙ",
    note: "✦ ባህል · ጥራት · አቀባበል",
  },
};

function Hero() {
  const { language } = useLanguage();
  const t = translations[language] || translations.EN;

  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-label">{t.label}</span>

        <h1>
          {t.title}
          <br />
          <span>{t.subtitle}</span>
        </h1>

        <p>{t.description}</p>

        <div className="hero-buttons">
          <a href="/Abbaa_Gadaa_Restaurant/menu" className="hero-primary">
            {t.menu}
          </a>

          <a href="/Abbaa_Gadaa_Restaurant/contact" className="hero-secondary">
            {t.book}
          </a>
        </div>

        <div className="hero-note">{t.note}</div>
      </div>
    </section>
  );
}

export default Hero;
