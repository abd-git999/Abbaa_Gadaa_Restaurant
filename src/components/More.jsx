
import PlaceIcon from "@mui/icons-material/Place";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import GroupsIcon from "@mui/icons-material/Groups";
import SpaIcon from "@mui/icons-material/Spa";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  EN: {
    ingredients: "Fresh & Natural Ingredients",
    ingredientsText: "We use the best local ingredients.",
    hospitality: "Oromo Hospitality",
    hospitalityText: "Feel at home, always.",
    recipes: "Traditional Recipes",
    recipesText: "Taste the real Ethiopia.",
    location: "Located in Bulbula City",
    locationText: "Visit us and enjoy the experience.",
  },

  OR: {
    ingredients: "Wantoota Haaraa fi Uumamaa",
    ingredientsText: "Wantoota naannoo keenya keessaa filataman fayyadamna.",
    hospitality: "Simannaa Oromoo",
    hospitalityText: "Yeroo hunda akka mana keessaniitti ofitti dhaga'aa.",
    recipes: "Nyaata Aadaa",
    recipesText: "Dhandhama Itoophiyaa dhugaa qoradhaa.",
    location: "Magaalaa Bulbulaatti Argama",
    locationText: "Nu daawwadhaa, muuxannoo gaarii argadhaa.",
  },

  "አማ": {
    ingredients: "ትኩስ እና ተፈጥሯዊ ግብዓቶች",
    ingredientsText: "ምርጥ የአካባቢ ግብዓቶችን እንጠቀማለን።",
    hospitality: "የኦሮሞ አቀባበል",
    hospitalityText: "ሁልጊዜ በቤትዎ እንዳሉ ይሰማዎት።",
    recipes: "ባህላዊ የምግብ አሰራር",
    recipesText: "የእውነተኛውን ኢትዮጵያ ጣዕም ይቅመሱ።",
    location: "በቡልቡላ ከተማ ይገኛል",
    locationText: "ይጎብኙንና ተሞክሮውን ይደሰቱ።",
  },
};

function More() {
  const { language } = useLanguage();
  const t = translations[language] || translations.EN;

  return (
    <section className="more-banner">
      <div className="food-icons">
        <div className="SpaIcon-icon">
          <SpaIcon />
          <h3>{t.ingredients}</h3>
          <p>{t.ingredientsText}</p>
        </div>

        <div className="GroupsIcon-icon">
          <GroupsIcon />
          <h3>{t.hospitality}</h3>
          <p>{t.hospitalityText}</p>
        </div>

        <div className="RestaurantIcon-icon">
          <RestaurantIcon />
          <h3>{t.recipes}</h3>
          <p>{t.recipesText}</p>
        </div>

        <div className="PlaceIcon-icon">
          <PlaceIcon />
          <h3>{t.location}</h3>
          <p>{t.locationText}</p>
        </div>
      </div>
    </section>
  );
}

export default More;
