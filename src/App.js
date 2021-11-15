import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Customers from './pages/Customers';
import Products from './pages/Products';
import CustomerDetailed from './pages/CustomerDetailed';
import ProductDetailed from './pages/ProductDetailed'

function App() {
  return (<Router>
    <NavBar />

    <Switch>
      <Route exact path="/customers">
        <Customers />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route path={`/customers/:customerId`}>
        <CustomerDetailed />
      </Route>
      <Route path={`/products/:productId`}>
        <ProductDetailed />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>

    </Switch>
  </Router>
  );
}

export default App;
