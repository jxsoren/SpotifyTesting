import logo from './logo.svg';
import './App.css';
import { TopSongs } from './TopSongs.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
        <TopSongs />
      </header>
    </div>
  );
}

export default App;
