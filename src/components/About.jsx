import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./About.css";

const translations = {
  EN: {
    eyebrow: "OUR STORY · OUR CULTURE · OUR PASSION",
    title: "More Than Food,",
    titleHighlight: " It's Our Heritage.",
    intro:
      "Welcome to Abbaa Gadaa Restaurant, where authentic flavors, rich traditions, and warm hospitality come together to create unforgettable dining experiences.",
    description:
      "Inspired by Ethiopian cuisine and Oromo culture, we believe every meal is an opportunity to bring people together. From sharing delicious dishes to welcoming every guest like family, we celebrate the traditions that make us who we are.",
    exploreMenu: "Explore Our Menu",
    contactUs: "Contact Us",
    cardLabel: "THE HEART OF OUR TABLE",
    cardTitle: "Tradition in Every Bite",
    cardText: "Authentic flavors. Genuine hospitality. Memorable moments.",
    cardFooter: "A TASTE OF ETHIOPIA",
    valuesEyebrow: "WHAT MAKES US SPECIAL",
    valuesTitle: "Our Values, Our Promise",
    valuesIntro: "Every detail reflects our love for food, culture, and people.",
    flavorTitle: "Authentic Flavors",
    flavorText: "Celebrate the distinctive tastes and culinary traditions of Ethiopia.",
    hospitalityTitle: "Warm Hospitality",
    hospitalityText: "We strive to make every guest feel welcome, comfortable, and valued.",
    cultureTitle: "Cultural Heritage",
    cultureText: "We honor the traditions and shared experiences that bring our community together.",
    bottomText: "GOOD FOOD. GREAT COMPANY. RICH TRADITION.",
    bottomTitle: "Come as a guest. Leave as family.",
    visitUs: "Visit Us",
  },

  OR: {
    eyebrow: "SEENAA KEENYA · AADAA KEENYA · JAALALA KEENYA",
    title: "Nyaata Caalaa,",
    titleHighlight: " Dhaala Keenya.",
    intro:
      "Baga gara Mana Nyaataa Abbaa Gadaa dhuftan. Asitti mi'aan nyaataa dhugaa, aadaan badhaadhaan fi simannaan ho'aan walitti dhufanii muuxannoo nyaataa hin dagatamne uumu.",
    description:
      "Nyaata Itoophiyaa fi aadaa Oromoo irraa kaanee, nyaanni hundi namoota walitti fiduuf carraa akka ta'e amanna. Nyaata mi'aawaa waliin qooddachuu irraa kaasee hanga keessummoota maatii keenyaatti simachuutti, aadaa eenyummaa keenya ibsu kabajna.",
    exploreMenu: "Baafata Nyaataa Ilaali",
    contactUs: "Nu Qunnamaa",
    cardLabel: "GARA TABLEE KEENYAA",
    cardTitle: "Tokkoon Tokkoon Nyaataa Aadaa Qaba",
    cardText: "Mi'a dhugaa. Simannaa gaarii. Yeroo hin dagatamne.",
    cardFooter: "DHANDHAMA ITOOPHIYAA",
    valuesEyebrow: "WANTI NU ADDAN BAASU",
    valuesTitle: "Duudhaa Keenya, Waadaa Keenya",
    valuesIntro: "Wanti hundi jaalala nyaataa, aadaa fi namootaaf qabnu calaqqisiisa.",
    flavorTitle: "Mi'a Nyaataa Dhugaa",
    flavorText: "Mi'a adda ta'ee fi aadaa nyaataa Itoophiyaa kabajaa.",
    hospitalityTitle: "Simannaa Ho'aa",
    hospitalityText: "Keessummoonni hundi akka simataman, mijatan fi kabajaman gochuuf ni hojjenna.",
    cultureTitle: "Dhaala Aadaa",
    cultureText: "Aadaa fi muuxannoo waloo hawaasa keenya walitti fidu kabajna.",
    bottomText: "NYAATA GAARII. HIRIIROO GAARII. AADAA BADHAADHAA.",
    bottomTitle: "Akka keessummaatti kottu, akka maatiitti deebi'i.",
    visitUs: "Nu Daawwadhaa",
  },

  "አማ": {
    eyebrow: "ታሪካችን · ባህላችን · ፍቅራችን",
    title: "ከምግብ በላይ፣",
    titleHighlight: " ቅርሳችን ነው።",
    intro:
      "ወደ አባ ገዳ ምግብ ቤት እንኳን በደህና መጡ። እውነተኛ ጣዕሞች፣ የበለጸጉ ወጎች እና ሞቅ ያለ አቀባበል ተዋህደው የማይረሱ የምግብ ልምዶችን ይፈጥራሉ።",
    description:
      "ከኢትዮጵያ ምግብ እና ከኦሮሞ ባህል ተነስተን፣ እያንዳንዱ ምግብ ሰዎችን ለማቀራረብ እድል እንደሆነ እናምናለን። ጣፋጭ ምግቦችን ከመጋራት እስከ እያንዳንዱን እንግዳ እንደ ቤተሰብ መቀበል ድረስ፣ ማንነታችንን የሚገልጹ ወጎችን እናከብራለን።",
    exploreMenu: "ምናሌያችንን ይመልከቱ",
    contactUs: "ያግኙን",
    cardLabel: "የገበታችን ልብ",
    cardTitle: "በእያንዳንዱ ንክሻ ባህል",
    cardText: "እውነተኛ ጣዕም። ልባዊ አቀባበል። የማይረሱ ጊዜያት።",
    cardFooter: "የኢትዮጵያ ጣዕም",
    valuesEyebrow: "ልዩ የሚያደርገን",
    valuesTitle: "እሴቶቻችን፣ ቃል ኪዳናችን",
    valuesIntro: "እያንዳንዱ ዝርዝር ለምግብ፣ ለባህል እና ለሰዎች ያለንን ፍቅር ያንጸባርቃል።",
    flavorTitle: "እውነተኛ ጣዕሞች",
    flavorText: "የኢትዮጵያን ልዩ ጣዕሞች እና የምግብ ወጎች ያክብሩ።",
    hospitalityTitle: "ሞቅ ያለ አቀባበል",
    hospitalityText: "እያንዳንዱ እንግዳ የተቀበለ፣ ምቾት የተሰማው እና የተከበረ እንዲሆን እንጥራለን።",
    cultureTitle: "ባህላዊ ቅርስ",
    cultureText: "ማህበረሰባችንን የሚያቀራርቡ ወጎችን እና የጋራ ልምዶችን እናከብራለን።",
    bottomText: "ጥሩ ምግብ። ጥሩ ጓደኝነት። የበለጸገ ባህል።",
    bottomTitle: "እንደ እንግዳ ይምጡ፤ እንደ ቤተሰብ ይሂዱ።",
    visitUs: "ይጎብኙን",
  },
};

function About() {
  const { language } = useLanguage();
  const t = translations[language] || translations.EN;

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-container">
          <div className="about-layout">
            <div className="about-text">
              <span className="about-eyebrow">{t.eyebrow}</span>

              <h1>
                {t.title}
                <span>{t.titleHighlight}</span>
              </h1>

              <p className="about-intro">{t.intro}</p>

              <p className="about-description">{t.description}</p>

              <div className="about-actions">
                <Link to="/menu" className="about-primary-btn">
                  {t.exploreMenu} <span>→</span>
                </Link>

                <Link to="/contact" className="about-secondary-btn">
                  {t.contactUs}
                </Link>
              </div>
            </div>

            <div className="about-visual">
              <div className="about-decoration about-decoration-top" />
              <div className="about-feature-card">
                <span className="about-symbol">✦</span>
                <p className="about-card-label">{t.cardLabel}</p>
                <h2>{t.cardTitle}</h2>
                <p className="about-card-text">{t.cardText}</p>
                <div className="about-card-divider" />
                <span className="about-card-footer">{t.cardFooter}</span>
              </div>
              <div className="about-decoration about-decoration-bottom" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-heading">
          <span>{t.valuesEyebrow}</span>
          <h2>{t.valuesTitle}</h2>
          <p>{t.valuesIntro}</p>
        </div>

        <div className="about-values-grid">
          <article className="about-value-card">
            <span className="about-value-icon">✿</span>
            <h3>{t.flavorTitle}</h3>
            <p>{t.flavorText}</p>
          </article>

          <article className="about-value-card">
            <span className="about-value-icon">♡</span>
            <h3>{t.hospitalityTitle}</h3>
            <p>{t.hospitalityText}</p>
          </article>

          <article className="about-value-card">
            <span className="about-value-icon">❋</span>
            <h3>{t.cultureTitle}</h3>
            <p>{t.cultureText}</p>
          </article>
        </div>
      </section>

      <section className="about-bottom">
        <p>{t.bottomText}</p>
        <h2>{t.bottomTitle}</h2>
        <Link to="/contact" className="about-primary-btn">
          {t.visitUs} <span>→</span>
        </Link>
      </section>
    </main>
  );
}

export default About;