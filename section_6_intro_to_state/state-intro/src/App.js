import './App.css';
import Game from './Game';
import Demo from './Demo';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';
function App() {
  return (
    <div className="App">
      <Rando maxNum={7} />
      <Button />
      <BrokenClick />
    </div>
  );
}

export default App;
