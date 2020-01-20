import React from 'react';
import './App.css';
import Menu from "./Components/Menu";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AdminView from "./Components/AdminView";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


class App extends React.Component {
  state = {
    currentUser: null,
    users: [],
    admin: 1 //1 == no, 2 == yes, comes from currentUser.userType
  }

  constructor(props) {
    super(props)

    this.setUser = this.setUser.bind(this);
  }

  setUser(user) {
    this.setState({
      currentUser: user,
      admin: user.userType
    })
  }

  render() {
    return (
        <Router>
          <Switch>
            <Route 
            path="/" exact 
            render={(props) => <Login {...props} setUser={this.setUser}/>}
            />
            {this.state.admin === 2 ? 
            <Route
            path="/menu"
            render={(props) => <AdminView {...props} currentUser={this.state.currentUser}/>}
            />
            :
            <Route 
            path="/menu"
            render={(props) => <Menu {...props} currentUser={this.state.currentUser}/>}
            />}
            <Route path="/register" component={Register}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
