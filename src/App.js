import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Data from './data.js';

function App() {

  const cards = Data.map((item, index) =>
    <Card 
      key={index}
      item={item}
      id={index}
    />
  )

  console.log(cards);

  return (
    <div className="App">
      <Navbar />
      <section className="journal">
        {cards}
      </section>
      
    </div>
  );
}

export default App;
