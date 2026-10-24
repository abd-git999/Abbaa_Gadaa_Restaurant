import "./checkOut.css";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function CheckOut() {
  const [customer, setCustomer] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    instructions: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [completedOrder, setCompletedOrder] = useState(null);

  const { cartItems, cartTotal, clearCart } = useCart();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCustomer((previousCustomer) => ({
      ...previousCustomer,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cartItems.length === 0) return;

    const reference = `AG-${Date.now().toString().slice(-6)}`;

    const order = {
      reference,
      customer: { ...customer },
      paymentMethod,
      items: cartItems.map((item) => ({ ...item })),
      total: cartTotal,
      createdAt: new Date().toLocaleString(),
    };

    setCompletedOrder(order);
    setOrderNumber(reference);
    setOrderPlaced(true);

    console.log("Order Details:", order);

    clearCart();
  };

  if (orderPlaced && completedOrder) {
    return (
      <div className="checkout-page">
        <div className="transaction-success">
          <div className="success-check">✓</div>

          <h2>Order Successful!</h2>
          <p className="success-subtitle">
            Your order has been placed successfully.
          </p>

          <div className="receipt-card">
            <p className="receipt-label">ORDER TOTAL</p>

            <h1>{completedOrder.total.toFixed(2)} ETB</h1>

            <div className="receipt-divider"></div>

            <div className="receipt-row">
              <span>Order Status</span>
              <strong className="status-success">Successful</strong>
            </div>

            <div className="receipt-row">
              <span>Reference Number</span>
              <strong>{orderNumber}</strong>
            </div>

            <div className="receipt-row">
              <span>Date &amp; Time</span>
              <strong>{completedOrder.createdAt}</strong>
            </div>

            <div className="receipt-row">
              <span>Payment Method</span>
              <strong>
                {completedOrder.paymentMethod === "cash"
                  ? "Cash on Delivery"
                  : "Mobile Money"}
              </strong>
            </div>

            <div className="receipt-row">
              <span>Customer</span>
              <strong>{completedOrder.customer.fullName}</strong>
            </div>
             <div className="receipt-row">
  <span>Phone Number</span>
  <strong>{completedOrder.customer.phone}</strong>
</div>

<div className="receipt-row">
  <span>Delivery Address</span>
  <strong>
    {completedOrder.customer.address},{" "}
    {completedOrder.customer.city}
  </strong>
</div>
            <div className="receipt-divider"></div>

            <p className="receipt-label">ORDER DETAILS</p>

            {completedOrder.items.map((item) => (
              <div className="receipt-row" key={item.id}>
                <span>
                  {item.name} × {item.quantity}
                </span>
                <strong>
                  {(item.price * item.quantity).toFixed(2)} ETB
                </strong>
              </div>
            ))}
          </div>

   <p className="success-thanks">
  Thank you for choosing Abbaa Gadaa Restaurant!
</p>

<p className="delivery-confirmation">
  Your order details have been recorded.
  Please keep your reference number for order inquiries.
</p>
          <button
  type="button"
  className="back-home-btn"
  onClick={() => window.location.href = "/"}
>
  Back to Home
</button>
<button
  type="button"
  className="continue-shopping-btn"
  onClick={() => window.location.href = "/menu"}
>
  Continue Shopping
</button>
<button
  type="button"
  className="print-receipt-btn"
  onClick={() => window.print()}
>
  Print Receipt
</button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <p className="checkout-subtitle">
        Complete your details to place your order.
      </p>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Delivery Information</h2>

          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            value={customer.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={customer.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={customer.email}
            onChange={handleChange}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            value={customer.city}
            onChange={handleChange}
            required
          />

          <label htmlFor="address">Delivery Address</label>
          <textarea
            id="address"
            name="address"
            value={customer.address}
            onChange={handleChange}
            required
          />

          <label htmlFor="instructions">
            Delivery Instructions (Optional)
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={customer.instructions}
            onChange={handleChange}
          />

          <h2>Payment Method</h2>

          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(event) =>
                  setPaymentMethod(event.target.value)
                }
              />
              Cash on Delivery
            </label>

            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="mobile"
                checked={paymentMethod === "mobile"}
                onChange={(event) =>
                  setPaymentMethod(event.target.value)
                }
              />
              Mobile Money
            </label>
          </div>

          <button
            type="submit"
            className="place-order-btn"
            disabled={cartItems.length === 0}
          >
            Place Order
          </button>
        </form>

        <div className="checkout-summary">
          <h2>Your Order</h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id}>
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>
                  {(item.price * item.quantity).toFixed(2)} ETB
                </span>
              </div>
            ))
          )}

          <h3>
            <span>Subtotal</span>
            <span>{cartTotal.toFixed(2)} ETB</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;