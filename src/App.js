import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/productListing';
import ProductDetails from './containers/Productdetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
                 