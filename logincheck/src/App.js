import React from 'react';
import Todo from './Views/todo';
import Login from './Views/login';
import {Route,Switch} from 'react-router-dom'
import './App.css';

class App extends React.Component
{
  state={ 
      isLogined : false,
  };

  componentDidMount(e)
  {
    var n = sessionStorage.getItem('name')
    if(n != null)
    {
      this.setState({ isLogined: true })
    }
  }

  onAuth = ()=>
  {
    this.setState({ isLogined: true })
  }

  render()
  {
    const {isLogined} = this.state;
    return (
      isLogined ? <div>
        <Switch>
          <Route path="/todo" component={Todo} />
      </Switch>
      </div>

      : <Login onSubmit={this.onAuth}/>      
    )
  }
}


export default App;
