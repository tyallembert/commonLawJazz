import './App.scss';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Music from './components/Music';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Music />
    </div>
  );
}

export default App;
