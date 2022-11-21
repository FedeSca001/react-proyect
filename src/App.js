import './App.css';
import CardComponent from './components/CardRestorants/CardComponent';

function App() {
  let restorants = [];
  const getData = async () => {
          const url =
                  "https://62630e3ac430dc560d2b8a72.mockapi.io/restorants";
          const r = await fetch(url);
          restorants = await r.json();
          console.log(restorants[0]);
  };
  getData();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Comienza React</h1>
        <CardComponent/>
      </header>
    </div>
  );
}

export default App;
