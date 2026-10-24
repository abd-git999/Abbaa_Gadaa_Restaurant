
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
const navigate = useNavigate();
  return (
    <section className="cart-page">
      <h1>Your Shopping Cart</h1>
      <p className="cart-intro">
        Review your favorite dishes before placing your order.
      </p>

       {cartItems.length === 0 ? (
  <div className="empty-cart">
    <div className="empty-cart-icon">🛒</div>

    <h2>Your cart is waiting!</h2>

    <p>
      You haven't added any delicious dishes yet.
      Explore our menu and find your next favorite meal.
    </p>

    <Link to="/menu" className="empty-cart-btn">
      Explore Our Menu <span>→</span>
    </Link>
  </div>

      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Price: {item.price} ETB</p>

                  <div className="quantity-controls">
                    <button
                      type="button"
                      aria-label={`Decrease ${item.name} quantity`}
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-actions">
                  <strong>
                    {(item.price * item.quantity).toFixed(2)} ETB
                  </strong>

                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Items ({totalItems})</span>
              <span>{cartTotal.toFixed(2)} ETB</span>
            </div>

            <div className="summary-row">
              <span>Free Delivery </span>
              <span>To be confirmed</span>
            </div>

            <div className="summary-total">
              <span>Subtotal</span>
              <strong>{cartTotal.toFixed(2)} ETB</strong>
            </div>

          <button
  type="button"
  className="checkout-btn"
  onClick={() => navigate("/checkout")}
>
  Proceed to Checkout <span>→</span>
</button>

            <p className="checkout-note">
              Freshly prepared with care. Thank you for choosing us!
            </p>
          </aside>
        </>
      )}
    </section>
  );
}

export default Cart;
