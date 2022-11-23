import './App.css';
import CardComponent from './components/CardRestorants/CardComponent';
let restorants = [];
const getData = async () => {
        const url =
                "https://62630e3ac430dc560d2b8a72.mockapi.io/restorants";
        const r = await fetch(url);
        return restorants = await r.json();
};
getData();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Comienza React</h1>
        <CardComponent sites={restorants} />
      </header>
    </div>
  );
}

export default App;
