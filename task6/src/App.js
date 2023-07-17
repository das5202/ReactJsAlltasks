import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="menu">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/component1" activeClassName="active">Component 1</NavLink>
            </li>
            <li>
              <NavLink to="/component2" activeClassName="active">Component 2</NavLink>
            </li>
            <li>
              <NavLink to="/component3" activeClassName="active">Component 3</NavLink>
            </li>
          </ul>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/component1" component={Component1} />
            <Route path="/component2" component={Component2} />
            <Route path="/component3" component={Component3} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

const Home = () => (
  <div className="component">
    <h2>Home</h2>
    <p>Welcome to the Home page.</p>
  </div>
);

export default App;
