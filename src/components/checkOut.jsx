import "./checkOut.css";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  EN: {
    title: "Checkout",
    subtitle: "Complete your details to place your order.",
    deliveryInfo: "Delivery Information",
    fullName: "Full Name",
    phone: "Phone Number",
    email: "Email Address",
    city: "City",
    address: "Delivery Address",
    instructions: "Delivery Instructions (Optional)",
    payment: "Payment Method",
    cash: "Cash on Delivery",
    mobile: "Mobile Money",
    placeOrder: "Place Order",
    yourOrder: "Your Order",
    emptyCart: "Your cart is empty.",
    subtotal: "Subtotal",
    success: "Order Successful!",
    successSubtitle: "Your order has been placed successfully.",
    orderTotal: "ORDER TOTAL",
    orderStatus: "Order Status",
    successful: "Successful",
    reference: "Reference Number",
    dateTime: "Date & Time",
    customer: "Customer",
    orderDetails: "ORDER DETAILS",
    thanks: "Thank you for choosing Abbaa Gadaa Restaurant!",
    confirmation:
      "Your order details have been recorded. Please keep your reference number for order inquiries.",
    home: "Back to Home",
    continueShopping: "Continue Shopping",
    print: "Print Receipt",
    items: "Items",
    delivery: "Delivery Address",
    decrease: "Decrease",
  },

  OR: {
    title: "Ajaja Xumuri",
    subtitle: "Ajaja keessan galmeessuuf odeeffannoo keessan guutaa.",
    deliveryInfo: "Odeeffannoo Geejjibaa",
    fullName: "Maqaa Guutuu",
    phone: "Lakkoofsa Bilbilaa",
    email: "Teessoo Imeelii",
    city: "Magaalaa",
    address: "Teessoo Geejjibaa",
    instructions: "Qajeelfama Geejjibaa (Filannoo)",
    payment: "Mala Kaffaltii",
    cash: "Kaffaltii Yeroo Geejjibaa",
    mobile: "Maallaqa Bilbilaa",
    placeOrder: "Ajaja Galmeessi",
    yourOrder: "Ajaja Keessan",
    emptyCart: "Gaariin nyaataa keessan duwwaa dha.",
    subtotal: "Waliigala Xiqqaa",
    success: "Ajajni Milkaa'eera!",
    successSubtitle: "Ajajni keessan milkaa'inaan galmaa'eera.",
    orderTotal: "WALIIGALA AJAJAA",
    orderStatus: "Haala Ajajaa",
    successful: "Milkaa'eera",
    reference: "Lakkoofsa Wabii",
    dateTime: "Guyyaa fi Sa'aatii",
    customer: "Maamila",
    orderDetails: "BAL'INA AJAJAA",
    thanks: "Mana Nyaataa Abbaa Gadaa filachuu keessaniif galatoomaa!",
    confirmation:
      "Odeeffannoon ajaja keessanii galmaa'eera. Gaaffii ajajaa yoo qabaattan lakkoofsa wabii keessan qabachuu.",
    home: "Gara Manaatti Deebi'i",
    continueShopping: "Nyaata Bituu Itti Fufi",
    print: "Ragaa Maxxansi",
    items: "Nyaata",
    delivery: "Teessoo Geejjibaa",
    decrease: "Baay'ina Hir'isi",
  },

  "አማ": {
    title: "ክፍያ",
    subtitle: "ትዕዛዝዎን ለማስገባት ዝርዝሮችዎን ይሙሉ።",
    deliveryInfo: "የማድረሻ መረጃ",
    fullName: "ሙሉ ስም",
    phone: "ስልክ ቁጥር",
    email: "ኢሜይል አድራሻ",
    city: "ከተማ",
    address: "የማድረሻ አድራሻ",
    instructions: "የማድረሻ መመሪያ (አማራጭ)",
    payment: "የክፍያ ዘዴ",
    cash: "በሚደርስበት ጊዜ በጥሬ ገንዘብ",
    mobile: "በሞባይል ገንዘብ",
    placeOrder: "ትዕዛዝ ያስገቡ",
    yourOrder: "ትዕዛዝዎ",
    emptyCart: "የግዢ ቅርጫትዎ ባዶ ነው።",
    subtotal: "ንዑስ ድምር",
    success: "ትዕዛዙ በተሳካ ሁኔታ ተጠናቋል!",
    successSubtitle: "ትዕዛዝዎ በተሳካ ሁኔታ ተመዝግቧል።",
    orderTotal: "ጠቅላላ የትዕዛዝ ዋጋ",
    orderStatus: "የትዕዛዝ ሁኔታ",
    successful: "ተሳክቷል",
    reference: "የማጣቀሻ ቁጥር",
    dateTime: "ቀን እና ሰዓት",
    customer: "ደንበኛ",
    orderDetails: "የትዕዛዝ ዝርዝሮች",
    thanks: "አባ ገዳ ምግብ ቤትን ስለመረጡ እናመሰግናለን!",
    confirmation:
      "የትዕዛዝዎ ዝርዝሮች ተመዝግበዋል። ስለ ትዕዛዝዎ ለመጠየቅ የማጣቀሻ ቁጥርዎን ይያዙ።",
    home: "ወደ መነሻ ተመለስ",
    continueShopping: "ግዢዎን ይቀጥሉ",
    print: "ደረሰኙን ያትሙ",
    items: "ዕቃዎች",
    delivery: "የማድረሻ አድራሻ",
    decrease: "ብዛት ይቀንሱ",
  },
};

const dishNames = {
  "Doro Wat": { OR: "Marqaa Lukkuu", "አማ": "ዶሮ ወጥ" },
  Tibs: { OR: "Foon Caccabsame", "አማ": "ጥብስ" },
  "Misir Wat": { OR: "Marqaa Misira", "አማ": "ምስር ወጥ" },
  Shiro: { OR: "Shiro", "አማ": "ሽሮ" },
  Genfo: { OR: "Marqaa Garbuu", "አማ": "ገንፎ" },
};

function CheckOut() {
  const { language } = useLanguage();
  const t = translations[language] || translations.EN;

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

  const getDishName = (name) => {
    if (language === "EN") return name;
    return dishNames[name]?.[language] || name;
  };

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

          <h2>{t.success}</h2>
          <p className="success-subtitle">{t.successSubtitle}</p>

          <div className="receipt-card">
            <p className="receipt-label">{t.orderTotal}</p>
            <h1>{completedOrder.total.toFixed(2)} ETB</h1>

            <div className="receipt-divider"></div>

            <div className="receipt-row">
              <span>{t.orderStatus}</span>
              <strong className="status-success">{t.successful}</strong>
            </div>

            <div className="receipt-row">
              <span>{t.reference}</span>
              <strong>{orderNumber}</strong>
            </div>

            <div className="receipt-row">
              <span>{t.dateTime}</span>
              <strong>{completedOrder.createdAt}</strong>
            </div>

            <div className="receipt-row">
              <span>{t.payment}</span>
              <strong>
                {completedOrder.paymentMethod === "cash" ? t.cash : t.mobile}
              </strong>
            </div>

            <div className="receipt-row">
              <span>{t.customer}</span>
              <strong>{completedOrder.customer.fullName}</strong>
            </div>

            <div className="receipt-row">
              <span>{t.phone}</span>
              <strong>{completedOrder.customer.phone}</strong>
            </div>

            <div className="receipt-row">
              <span>{t.delivery}</span>
              <strong>
                {completedOrder.customer.address},{" "}
                {completedOrder.customer.city}
              </strong>
            </div>

            <div className="receipt-divider"></div>
            <p className="receipt-label">{t.orderDetails}</p>

            {completedOrder.items.map((item) => (
              <div className="receipt-row" key={item.id}>
                <span>
                  {getDishName(item.name)} × {item.quantity}
                </span>
                <strong>
                  {(item.price * item.quantity).toFixed(2)} ETB
                </strong>
              </div>
            ))}
          </div>

          <p className="success-thanks">{t.thanks}</p>
          <p className="delivery-confirmation">{t.confirmation}</p>

          <button
            type="button"
            className="back-home-btn"
            onClick={() =>
              (window.location.href = "/Abbaa_Gadaa_Restaurant/")
            }
          >
            {t.home}
          </button>

          <button
            type="button"
            className="continue-shopping-btn"
            onClick={() =>
              (window.location.href = "/Abbaa_Gadaa_Restaurant/menu")
            }
          >
            {t.continueShopping}
          </button>

          <button
            type="button"
            className="print-receipt-btn"
            onClick={() => window.print()}
          >
            {t.print}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>{t.title}</h1>
      <p className="checkout-subtitle">{t.subtitle}</p>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>{t.deliveryInfo}</h2>

          <label htmlFor="fullName">{t.fullName}</label>
          <input
            id="fullName"
            name="fullName"
            value={customer.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">{t.phone}</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={customer.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">{t.email}</label>
          <input
            id="email"
            name="email"
            type="email"
            value={customer.email}
            onChange={handleChange}
          />

          <label htmlFor="city">{t.city}</label>
          <input
            id="city"
            name="city"
            value={customer.city}
            onChange={handleChange}
            required
          />

          <label htmlFor="address">{t.address}</label>
          <textarea
            id="address"
            name="address"
            value={customer.address}
            onChange={handleChange}
            required
          />

          <label htmlFor="instructions">{t.instructions}</label>
          <textarea
            id="instructions"
            name="instructions"
            value={customer.instructions}
            onChange={handleChange}
          />

          <h2>{t.payment}</h2>

          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={(event) => setPaymentMethod(event.target.value)}
              />
              {t.cash}
            </label>

            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="mobile"
                checked={paymentMethod === "mobile"}
                onChange={(event) => setPaymentMethod(event.target.value)}
              />
              {t.mobile}
            </label>
          </div>

          <button
            type="submit"
            className="place-order-btn"
            disabled={cartItems.length === 0}
          >
            {t.placeOrder}
          </button>
        </form>

        <div className="checkout-summary">
          <h2>{t.yourOrder}</h2>

          {cartItems.length === 0 ? (
            <p>{t.emptyCart}</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id}>
                <span>
                  {getDishName(item.name)} × {item.quantity}
                </span>
                <span>
                  {(item.price * item.quantity).toFixed(2)} ETB
                </span>
              </div>
            ))
          )}

          <h3>
            <span>{t.subtotal}</span>
            <span>{cartTotal.toFixed(2)} ETB</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;