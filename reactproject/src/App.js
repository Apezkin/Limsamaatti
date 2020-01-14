import React from 'react';
import './App.css';
import Menu from "./Components/Menu"
import Login from "./Components/Login"
import Register from "./Components/Register"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </Router>
  );
}

export default App;
