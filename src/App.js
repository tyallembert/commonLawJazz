import './App.scss';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Music from './components/Music';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Music />
      <Footer />
    </div>
  );
}

export default App;
