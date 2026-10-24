
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./cart.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
  } = useCart();

  return (
    <section className="cart-page">
      <h1>Your Shopping Cart</h1>
      <p className="cart-intro">
        Review your favorite dishes before placing your order.
      </p>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/menu">Explore Our Menu</Link>
        </div>
      ) : (
        <div className="cart-layout">
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
              <span>Items ({cartCount})</span>
              <span>{cartTotal.toFixed(2)} ETB</span>
            </div>

            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>To be confirmed</span>
            </div>

            <div className="summary-total">
              <span>Subtotal</span>
              <strong>{cartTotal.toFixed(2)} ETB</strong>
            </div>

            <button
              type="button"
              className="checkout-btn"
              onClick={() => alert("Checkout will be available soon!")}
            >
              Proceed to Checkout <span>→</span>
            </button>

            <p className="checkout-note">
              Freshly prepared with care. Thank you for choosing us!
            </p>
          </aside>
        </div>
      )}
    </section>
  );
}

export default Cart;
