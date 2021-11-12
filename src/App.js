import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/home';
import Customers from './pages/customers';
import Products from './pages/products';

function App() {
  return (<Router>
    <NavBar />

    <Switch>
      <Route path="/customers">
        <Customers />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>

    </Switch>
  </Router>
  );
}

export default App;
