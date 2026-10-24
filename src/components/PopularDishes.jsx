
import { useCart } from "../context/CartContext";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const dishes = [
  {
    id: 1,
    name: "Doro Wat",
    category: "Lunch",
    available: false,
    description: "Traditional chicken stew with spices and boiled eggs.",
    price: 250,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCL_373kOOYCTiYCxOm_jBgh4zULO7MQnEr35ecAjX6w&s=10",
  },
  {
    id: 2,
    name: "Tibs",
    category: "Lunch",
    available: true,
    description: "Sizzling beef with onions, tomatoes and peppers.",
    price: 220,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLIQN2jd7Ivr1ddqgylXOS2p54g4SZXLeBNaxrJgsag&s=10",
  },
  {
    id: 3,
    name: "Misir Wat",
    category: "Breakfast",
    available: true,
    description: "Spicy red lentil stew, rich in flavor.",
    price: 180,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTInAHJcs9BB5B4c35UCOsPz8Ee45N-EdYJ8048b-WAEw&s=10",
  },
  {
    id: 4,
    name: "Shiro",
    category: "Lunch",
    available: true,
    description: "A healthy mix of vegetables and legumes.",
    price: 200,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VRRwYHyCJT2IbAa85PBMZ3ko95zQS8vNa1r9SNLsfg&s=10",
  },
  {
    id: 5,
    name: "Genfo",
    category: "Breakfast",
    available: false,
    description: "Traditional barley porridge with butter.",
    price: 160,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11vvjIF742WBtzl6z16mv2Gj50g_7_d8XvFQ2zNTRH840ru4xfrUuNOqWMKz8wCmxi181v9pf1OmU2Zqxnl3tFML8cOytCs_rbQ-cDAki5g&s=10",
  },
];

function PopularDishes() {
  const [quantities, setQuantities] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { addToCart, cartCount } = useCart();

  const filteredDishes = dishes.filter((dish) => {
    const matchesSearch = dish.name
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());

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
    if (!dish.available) {
      return;
    }

    const quantity = quantities[dish.id] || 1;
    addToCart(dish, quantity);
  };

  return (
    <section className="popular-dishes" id="menu">
      <p className="section-label">OUR POPULAR DISHES</p>

      <h2>Signature Flavors</h2>

      <p className="section-description">
        Prepared with love, using traditional recipes and fresh ingredients.
      </p>

      <div className="category-filters">
        {["All", "Breakfast", "Lunch", "Dinner", "Drinks"].map(
          (category) => (
            <button
              key={category}
              type="button"
              className={
                selectedCategory === category ? "active" : ""
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="food-search">
        <input
          type="search"
          placeholder="Search food by name..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          aria-label="Search food by name"
        />

        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm("")}
          >
            Clear
          </button>
        )}
      </div>

      <div className="dish-grid">
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish) => (
            <article className="dish-card" key={dish.id}>
              <img src={dish.image} alt={dish.name} />

              <div className="dish-info">
                <h3>{dish.name}</h3>

                <p
                  className={
                    dish.available ? "available" : "unavailable"
                  }
                >
                  {dish.available
                    ? "Available"
                    : "Currently unavailable"}
                </p>

                <p>{dish.description}</p>

                <strong className="dish-price">
                  ETB {dish.price}
                </strong>

                <div className="dish-actions">
                  <div className="quantity-control">
                    <button
                      type="button"
                      aria-label={`Decrease ${dish.name} quantity`}
                      onClick={() => changeQuantity(dish.id, -1)}
                    >
                      <RemoveIcon fontSize="small" />
                    </button>

                    <span>{quantities[dish.id] || 1}</span>

                    <button
                      type="button"
                      aria-label={`Increase ${dish.name} quantity`}
                      onClick={() => changeQuantity(dish.id, 1)}
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
                        ? `Add ${dish.name} to cart`
                        : `${dish.name} is unavailable`
                    }
                  >
                    <AddShoppingCartIcon fontSize="small" />
                    {dish.available
                      ? "Add to Cart"
                      : "Unavailable"}
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className="no-food-results" role="status">
            No food found for "{searchTerm}". Try another name.
          </p>
        )}
      </div>

      <p className="cart-message" aria-live="polite">
        Items in cart: {cartCount}
      </p>

      <button type="button" className="full-menu-btn">
        View Full Menu →
      </button>
    </section>
  );
}

export default PopularDishes;
