import Hero from './components/Hero';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';



function App() {
  return (
    <div className="container">
      <Header /> 
      <Hero />
      <Home />
    </div>
  );
}

export default App;
