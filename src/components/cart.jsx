import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import "./cart.css";

const translations = {
  EN: {
    title: "Your Shopping Cart",
    intro: "Review your favorite dishes before placing your order.",
    emptyTitle: "Your cart is waiting!",
    emptyText:
      "You haven't added any delicious dishes yet. Explore our menu and find your next favorite meal.",
    explore: "Explore Our Menu",
    price: "Price",
    decrease: "Decrease",
    increase: "Increase",
    remove: "Remove",
    summary: "Order Summary",
    items: "Items",
    delivery: "Free Delivery",
    deliveryStatus: "To be confirmed",
    subtotal: "Subtotal",
    checkout: "Proceed to Checkout",
    note: "Freshly prepared with care. Thank you for choosing us!",
  },

  OR: {
    title: "Gaarii Nyaataa Keessan",
    intro: "Ajaja keessan osoo hin galmeessin nyaata jaallattan ilaalaa.",
    emptyTitle: "Gaariin nyaataa keessan isin eeggata!",
    emptyText:
      "Hanga ammaatti nyaata hin dabalanne. Baafata keenya ilaalaa, nyaata itti aanu jaallattan filadhaa.",
    explore: "Baafata Nyaataa Ilaalaa",
    price: "Gatii",
    decrease: "Baay'ina hir'isi",
    increase: "Baay'ina dabali",
    remove: "Haqi",
    summary: "Cuunfaa Ajajaa",
    items: "Nyaata",
    delivery: "Geejjiba Bilisaa",
    deliveryStatus: "Mirkanaa'uu qaba",
    subtotal: "Waliigala Xiqqaa",
    checkout: "Gara Kaffaltiitti Darbi",
    note: "Of eeggannoodhaan qophaa'e. Nu filachuu keessaniif galatoomaa!",
  },

  "አማ": {
    title: "የግዢ ቅርጫትዎ",
    intro: "ትዕዛዝዎን ከማስገባትዎ በፊት የመረጧቸውን ምግቦች ይመልከቱ።",
    emptyTitle: "ቅርጫትዎ እየጠበቀዎት ነው!",
    emptyText:
      "እስካሁን ምንም ምግብ አልጨመሩም። ምናሌያችንን ይመልከቱና የሚወዱትን ምግብ ይምረጡ።",
    explore: "ምናሌያችንን ይመልከቱ",
    price: "ዋጋ",
    decrease: "ብዛት ይቀንሱ",
    increase: "ብዛት ይጨምሩ",
    remove: "አስወግድ",
    summary: "የትዕዛዝ ማጠቃለያ",
    items: "ዕቃዎች",
    delivery: "ነፃ ማድረስ",
    deliveryStatus: "ይረጋገጣል",
    subtotal: "ንዑስ ድምር",
    checkout: "ወደ ክፍያ ይቀጥሉ",
    note: "በጥንቃቄ የተዘጋጀ። ስለመረጡን እናመሰግናለን!",
  },
};

const dishNames = {
  "Doro Wat": { OR: "Marqaa Lukkuu", "አማ": "ዶሮ ወጥ" },
  Tibs: { OR: "Foon Caccabsame", "አማ": "ጥብስ" },
  "Misir Wat": { OR: "Marqaa Misira", "አማ": "ምስር ወጥ" },
  Shiro: { OR: "Shiro", "አማ": "ሽሮ" },
  Genfo: { OR: "Marqaa Garbuu", "አማ": "ገንፎ" },
};

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const t = translations[language] || translations.EN;

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const getDishName = (name) => {
    if (language === "EN") return name;
    return dishNames[name]?.[language] || name;
  };

  return (
    <section className="cart-page">
      <h1>{t.title}</h1>
      <p className="cart-intro">{t.intro}</p>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>

          <h2>{t.emptyTitle}</h2>

          <p>{t.emptyText}</p>

          <Link to="/menu" className="empty-cart-btn">
            {t.explore} <span>→</span>
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={getDishName(item.name)} />

                <div className="cart-item-details">
                  <h3>{getDishName(item.name)}</h3>
                  <p>
                    {t.price}: {item.price} ETB
                  </p>

                  <div className="quantity-controls">
                    <button
                      type="button"
                      aria-label={`${t.decrease} ${getDishName(item.name)}`}
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      aria-label={`${t.increase} ${getDishName(item.name)}`}
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
                    {t.remove}
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>{t.summary}</h2>

            <div className="summary-row">
              <span>
                {t.items} ({totalItems})
              </span>
              <span>{cartTotal.toFixed(2)} ETB</span>
            </div>

            <div className="summary-row">
              <span>{t.delivery}</span>
              <span>{t.deliveryStatus}</span>
            </div>

            <div className="summary-total">
              <span>{t.subtotal}</span>
              <strong>{cartTotal.toFixed(2)} ETB</strong>
            </div>

            <button
              type="button"
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              {t.checkout} <span>→</span>
            </button>

            <p className="checkout-note">{t.note}</p>
          </aside>
        </>
      )}
    </section>
  );
}

export default Cart;