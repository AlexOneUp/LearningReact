import './App.css';
import { Route, Switch } from 'react-router-dom';
import Soda from './components/Soda';
import Chips from './components/Chips';
import SnackBar from './components/SnackBar';
import VendingMachine from './VendingMachine';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar/>
      <Switch>
        <Route exact path='/' render={() => <VendingMachine />} />
        <Route exact path='/soda' render={() => <Soda />} />
        <Route exact path='/chips' render={() => <Chips />} />
        <Route exact path='/snackbar' render={() => <SnackBar />} />
      </Switch>
    </div>
  );
}

export default App;
