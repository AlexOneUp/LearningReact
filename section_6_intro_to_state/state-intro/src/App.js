import './App.css';
import Game from './Game';
import Demo from './Demo';

function App() {
  return (
    <div className="App">
      <Game color="purple"/>
      <Demo animal="bobcat" food="pineapple"/>
    </div>
  );
}

export default App;
