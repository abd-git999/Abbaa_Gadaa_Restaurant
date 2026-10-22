
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const dishes = [
  {
    id: 1,
    name: "Doro Wat",
    description: "Traditional chicken stew with spices and boiled eggs.",
    price: 250,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCL_373kOOYCTiYCxOm_jBgh4zULO7MQnEr35ecAjX6w&s=10",
  },
  {
    id: 2,
    name: "Tibs",
    description: "Sizzling beef with onions, tomatoes and peppers.",
    price: 220,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLIQN2jd7Ivr1ddqgylXOS2p54g4SZXLeBNaxrJgsag&s=10",
  },
  {
    id: 3,
    name: "Misir Wat",
    description: "Spicy red lentil stew, rich in flavor.",
    price: 180,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTInAHJcs9BB5B4c35UCOsPz8Ee45N-EdYJ8048b-WAEw&s=10",
  },
  {
    id: 4,
    name: "Shiro",
    description: "A healthy mix of vegetables and legumes.",
    price: 200,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VRRwYHyCJT2IbAa85PBMZ3ko95zQS8vNa1r9SNLsfg&s=10",
  },
  {
    id: 5,
    name: "Genfo",
    description: "Traditional barley porridge with butter.",
    price: 160,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11vvjIF742WBtzl6z16mv2Gj50g_7_d8XvFQ2zNTRH840ru4xfrUuNOqWMKz8wCmxi181v9pf1OmU2Zqxnl3tFML8cOytCs_rbQ-cDAki5g&s=10",
  },
];

function PopularDishes() {
  const [quantities, setQuantities] = useState({});
  const [cart, setCart] = useState({});

  const changeQuantity = (id, amount) => {
    setQuantities((previous) => ({
      ...previous,
      [id]: Math.max(1, (previous[id] || 1) + amount),
    }));
  };

  const addToCart = (dish) => {
    const quantity = quantities[dish.id] || 1;

    setCart((previous) => ({
      ...previous,
      [dish.id]: (previous[dish.id] || 0) + quantity,
    }));
  };

  const cartCount = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0
  );

  return (
    <section className="popular-dishes" id="menu">
      <p className="section-label">OUR POPULAR DISHES</p>

      <h2>Signature Flavors</h2>

      <p className="section-description">
        Prepared with love, using traditional recipes and fresh ingredients.
      </p>

      <div className="dish-grid">
        {dishes.map((dish) => (
          <article className="dish-card" key={dish.id}>
            <img src={dish.image} alt={dish.name} />

            <div className="dish-info">
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>

              <strong className="dish-price">
                ETB {dish.price}
              </strong>

              <div className="dish-actions">
                <div className="quantity-control">
                  <button
                    aria-label={`Decrease ${dish.name} quantity`}
                    onClick={() => changeQuantity(dish.id, -1)}
                  >
                    <RemoveIcon fontSize="small" />
                  </button>

                  <span>{quantities[dish.id] || 1}</span>

                  <button
                    aria-label={`Increase ${dish.name} quantity`}
                    onClick={() => changeQuantity(dish.id, 1)}
                  >
                    <AddIcon fontSize="small" />
                  </button>
                </div>

                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(dish)}
                >
                  <AddShoppingCartIcon fontSize="small" />
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="cart-message" aria-live="polite">
        Items in cart: {cartCount}
      </p>

      <button className="full-menu-btn">
        View Full Menu →
      </button>
    </section>
  );
}

export default PopularDishes;
