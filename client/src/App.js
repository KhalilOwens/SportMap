import React, { Component } from 'react';
 import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login"
import Register from "./components/register"
//import routes from "../../routes";
import './App.css';
import Home from "./components/home";
import Title from "./components/title";
import MyMapComponent from './components/Map/Map';
import RegisterNext from "./components/register2";
import Main from "./components/Main"
//import MyFancyComponent from './components/Map/Map'
 
class App extends Component {


  render() {
    return (
      <Router>
        <Home>
          <Title>
          </Title>
          <Switch> 
            <Route exact path="/" component={Login} />
            <Route exact path="/Main" component={Main} />
            
            <Route exact path="/register" component={Register}/>
            <Route exact path="/register2" component={RegisterNext}/>
            <Route exact path="/Map" component={MyMapComponent} isMarkerShown >

            </Route>
          </Switch>

        </Home>
      </Router>
    );
  }
}

export default App;
