import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import JournalEntry from './components/JournalEntry';

function App() {
  return (
    <div className="App">
      <Navbar />
      <JournalEntry />
    </div>
  );
}

export default App;
