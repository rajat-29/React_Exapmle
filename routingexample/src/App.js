import React from 'react';
import logo from './logo.svg';
import Nav from './Components/nav';
import Home from './Views/home';
import About from './Views/about';
import ToDo from './Views/todo';
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
	        <Route exact path="/about" component={About} />
	        <Route exact path="/todo" component={ToDo} />
	    </Switch>
      </div>
    )
  }
}


export default App;
