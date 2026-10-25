
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import More from "./components/More";
import PopularDishes from "./components/PopularDishes";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Cart from "./components/cart";
import CheckOut from "./components/checkOut";

function Home() {
  return (
    <>
      <Hero />
      <More />
      <PopularDishes />
      <Gallery />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/Abbaa_Gadaa_Restaurant">
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<PopularDishes />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
