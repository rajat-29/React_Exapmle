import React from 'react';
import logo from './logo.svg';
import Nav from './Components/nav'
import Home from './Views/home';
import User from './Views/user';
import {Route,Switch} from 'react-router-dom'
import './App.css';

class App extends React.Component
{
  render()
  {
    return (
      <div>
        <Nav />
        <Switch>
	        <Route exact path="/" component={Home} />
	        <Route path="/user/:name" component={User} />
	    </Switch>
      </div>
    )
  }
}


export default App;
