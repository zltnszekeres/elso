
import './App.css';
import Kartyak from './componens/Kartyak';
import { lista } from './adatlista';

function App() {

  const ember={nev:"Jenő",
  kor: 35
  }


  return (
    <div className="App">
      <header className="App-header">
        Első app
      </header>


      <article>
    <Kartyak lista={lista}/>
        
      </article>

      <footer>đä</footer>
    </div>
  );
}

export default App;
