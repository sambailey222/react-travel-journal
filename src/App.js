import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="journal">
        <Card />
      </section>
      
    </div>
  );
}

export default App;
