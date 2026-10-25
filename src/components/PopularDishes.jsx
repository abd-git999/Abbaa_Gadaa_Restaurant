
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const dishes = [
  {
    id: 1,
    name: "Doro Wat",
    nameOR: "Foon Lukkuu",
    nameAM: "ዶሮ ወጥ",
    category: "Lunch",
    available: false,
    description: "Traditional chicken stew with spices and boiled eggs.",
    descriptionOR:
      "Nyaata lukkuu aadaa, mi'eessituu fi hanqaaquu waliin bilcheeffame.",
    descriptionAM:
      "በባህላዊ ቅመሞችና በተቀቀለ እንቁላል የተዘጋጀ የዶሮ ወጥ።",
    price: 250,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCL_373kOOYCTiYCxOm_jBgh4zULO7MQnEr35ecAjX6w&s=10",
  },
  {
    id: 2,
    name: "Tibs",
    nameOR: "Foon Waaddii",
    nameAM: "ጥብስ",
    category: "Lunch",
    available: true,
    description: "Sizzling beef with onions, tomatoes and peppers.",
    descriptionOR:
      "Foon loonii, qullubbii, timaatima fi barbaree waliin bilcheeffame.",
    descriptionAM:
      "ከሽንኩርት፣ ቲማቲምና ቃሪያ ጋር የተዘጋጀ የበሬ ጥብስ።",
    price: 220,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLIQN2jd7Ivr1ddqgylXOS2p54g4SZXLeBNaxrJgsag&s=10",
  },
  {
    id: 3,
    name: "Misir Wat",
    nameOR: "Ittoo Misiraa",
    nameAM: "ምስር ወጥ",
    category: "Breakfast",
    available: true,
    description: "Spicy red lentil stew, rich in flavor.",
    descriptionOR:
      "Misar diimaa mi'eessituu qabu fi dhandhama gaarii qabu.",
    descriptionAM:
      "በቅመም የተዘጋጀ ጣፋጭ የቀይ ምስር ወጥ።",
    price: 180,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTInAHJcs9BB5B4c35UCOsPz8Ee45N-EdYJ8048b-WAEw&s=10",
  },
  {
    id: 4,
    name: "Shiro",
    nameOR: "Ittoo",
    nameAM: "ሽሮ",
    category: "Lunch",
    available: true,
    description: "A healthy mix of vegetables and legumes.",
    descriptionOR:
      "Nyaata fayyaaf gaarii ta'e, wantoota biqiltootaa irraa qophaa'e.",
    descriptionAM:
      "ከጥራጥሬና ከተለያዩ ግብዓቶች የተዘጋጀ ምግብ።",
    price: 200,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VRRwYHyCJT2IbAa85PBMZ3ko95zQS8vNa1r9SNLsfg&s=10",
  },
  {
    id: 5,
    name: "Genfo",
    nameOR: "Marqaa ",
    nameAM: "ገንፎ",
    category: "Breakfast",
    available: false,
    description: "Traditional barley porridge with butter.",
    descriptionOR:
      "Marqaa garbuu aadaa dhadhaa waliin qophaa'e.",
    descriptionAM:
      "በባህላዊ መንገድ ከገብስና ከቅቤ የተዘጋጀ ገንፎ።",
    price: 160,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11vvjIF742WBtzl6z16mv2Gj50g_7_d8XvFQ2zNTRH840ru4xfrUuNOqWMKz8wCmxi181v9pf1OmU2Zqxnl3tFML8cOytCs_rbQ-cDAki5g&s=10",
  },
];

const translations = {
  EN: {
    label: "OUR POPULAR DISHES",
    title: "Signature Flavors",
    intro:
      "Prepared with love, using traditional recipes and fresh ingredients.",
    categories: ["All", "Breakfast", "Lunch", "Dinner", "Drinks"],
    search: "Search food by name...",
    clear: "Clear",
    available: "Available",
    unavailable: "Currently unavailable",
    add: "Add to Cart",
    unavailableButton: "Unavailable",
    noResults: "No food found for",
    tryAnother: "Try another name.",
    cart: "Items in cart:",
    fullMenu: "View Full Menu →",
    decrease: "Decrease",
    increase: "Increase",
  },

  OR: {
    label: "NYAATAWWAN JAALLATAMAN",
    title: "Dhandhama Addaa",
    intro:
      "Jaalalaan, akkaataa aadaa fi wantoota haaraa fayyadamuun qophaa'e.",
    categories: ["Hundaa", "Ciree", "Laaqana", "Irbaata", "Dhugaatii"],
    search: "Maqaa nyaataatiin barbaadi...",
    clear: "Haqi",
    available: "Ni argama",
    unavailable: "Yeroo ammaa hin jiru",
    add: "Gara Gaarii Keetti Dabali",
    unavailableButton: "Hin jiru",
    noResults: "Nyaanni hin argamne:",
    tryAnother: "Maqaa biraa yaali.",
    cart: "Wantoota gaarii keessa jiran:",
    fullMenu: "Baafata Guutuu Ilaali →",
    decrease: "Baay'ina hir'isi",
    increase: "Baay'ina dabali",
  },

  "አማ": {
    label: "ተወዳጅ ምግቦቻችን",
    title: "ልዩ ጣዕሞች",
    intro:
      "በፍቅር፣ በባህላዊ አሰራርና በትኩስ ግብዓቶች የተዘጋጀ።",
    categories: ["ሁሉም", "ቁርስ", "ምሳ", "እራት", "መጠጦች"],
    search: "በምግብ ስም ይፈልጉ...",
    clear: "አጽዳ",
    available: "ይገኛል",
    unavailable: "በአሁኑ ጊዜ አይገኝም",
    add: "ወደ ቅርጫት ጨምር",
    unavailableButton: "አይገኝም",
    noResults: "ምግብ አልተገኘም፦",
    tryAnother: "ሌላ ስም ይሞክሩ።",
    cart: "በቅርጫት ውስጥ ያሉ እቃዎች፦",
    fullMenu: "ሙሉ ምናሌውን ይመልከቱ →",
    decrease: "ብዛት ቀንስ",
    increase: "ብዛት ጨምር",
  },
};

function PopularDishes() {
  const [quantities, setQuantities] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { addToCart, cartCount } = useCart();
  const { language } = useLanguage();

  const t = translations[language] || translations.EN;

  const categories = [
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Drinks",
  ];

  const getDishName = (dish) => {
    if (language === "OR") return dish.nameOR;
    if (language === "አማ") return dish.nameAM;
    return dish.name;
  };

  const getDishDescription = (dish) => {
    if (language === "OR") return dish.descriptionOR;
    if (language === "አማ") return dish.descriptionAM;
    return dish.description;
  };

  const filteredDishes = dishes.filter((dish) => {
    const term = searchTerm.trim().toLowerCase();

    const matchesSearch =
      dish.name.toLowerCase().includes(term) ||
      dish.nameOR.toLowerCase().includes(term) ||
      dish.nameAM.toLowerCase().includes(term);

    const matchesCategory =
      selectedCategory === "All" ||
      dish.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const changeQuantity = (id, amount) => {
    setQuantities((previous) => ({
      ...previous,
      [id]: Math.max(1, (previous[id] || 1) + amount),
    }));
  };

  const handleAddToCart = (dish) => {
    if (!dish.available) return;

    const quantity = quantities[dish.id] || 1;
    addToCart(dish, quantity);
  };

  return (
    <section className="popular-dishes" id="menu">
      <p className="section-label">{t.label}</p>

      <h2>{t.title}</h2>

      <p className="section-description">{t.intro}</p>

      <div className="category-filters">
        {categories.map((category, index) => (
          <button
            key={category}
            type="button"
            className={
              selectedCategory === category ? "active" : ""
            }
            onClick={() => setSelectedCategory(category)}
          >
            {t.categories[index]}
          </button>
        ))}
      </div>

      <div className="food-search">
        <input
          type="search"
          placeholder={t.search}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          aria-label={t.search}
        />

        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm("")}
          >
            {t.clear}
          </button>
        )}
      </div>

      <div className="dish-grid">
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish) => (
            <article className="dish-card" key={dish.id}>
              <img src={dish.image} alt={getDishName(dish)} />

              <div className="dish-info">
                <h3>{getDishName(dish)}</h3>

                <p
                  className={
                    dish.available ? "available" : "unavailable"
                  }
                >
                  {dish.available
                    ? t.available
                    : t.unavailable}
                </p>

                <p>{getDishDescription(dish)}</p>

                <strong className="dish-price">
                  ETB {dish.price}
                </strong>

                <div className="dish-actions">
                  <div className="quantity-control">
                    <button
                      type="button"
                      aria-label={`${t.decrease} ${getDishName(dish)}`}
                      onClick={() =>
                        changeQuantity(dish.id, -1)
                      }
                    >
                      <RemoveIcon fontSize="small" />
                    </button>

                    <span>{quantities[dish.id] || 1}</span>

                    <button
                      type="button"
                      aria-label={`${t.increase} ${getDishName(dish)}`}
                      onClick={() =>
                        changeQuantity(dish.id, 1)
                      }
                    >
                      <AddIcon fontSize="small" />
                    </button>
                  </div>

                  <button
                    type="button"
                    className="add-cart-btn"
                    disabled={!dish.available}
                    onClick={() => handleAddToCart(dish)}
                    aria-label={
                      dish.available
                        ? `${t.add}: ${getDishName(dish)}`
                        : `${getDishName(dish)}: ${t.unavailableButton}`
                    }
                  >
                    <AddShoppingCartIcon fontSize="small" />

                    {dish.available
                      ? t.add
                      : t.unavailableButton}
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className="no-food-results" role="status">
            {t.noResults} "{searchTerm}". {t.tryAnother}
          </p>
        )}
      </div>

      <p className="cart-message" aria-live="polite">
        {t.cart} {cartCount}
      </p>

      <button
        type="button"
        className="full-menu-btn"
        onClick={() => {
          window.location.href = "/Abbaa_Gadaa_Restaurant/menu";
        }}
      >
        {t.fullMenu}
      </button>
    </section>
  );
}

export default PopularDishes;