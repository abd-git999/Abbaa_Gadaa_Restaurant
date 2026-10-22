import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import More from './components/More';
import PopularDishes from './components/PopularDishes'
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <More/>
    
      <PopularDishes/>
        <Contact/>
    </div>
  );
}

export default App;