import React from 'react';
import logo from './logo.svg';
import List from './Components/ul';
import './App.css';

class App extends React.Component
{
  state={ 
      todo : [],
  };

  componentDidMount()
  {
    var {todo} = this.state;
    var xml = new XMLHttpRequest();
    xml.open("GET","https://api.github.com/users?since=1",true);
    xml.onload = ()=>
    {
      var data = xml.responseText;
      todo = JSON.parse(data);
      console.log(todo[0].login)
       this.setState({todo : todo})
    }
    xml.send();
  } 

  componentWillUnmount()
  {
    console.log('off')
  }

  render()
  {
    const {todo} = this.state;
    return (
      <div>
        <List todo={todo} />
      </div>
    )
  }
}


export default App;
