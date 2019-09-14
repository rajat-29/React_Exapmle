import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div>
    <h1>TO-DO LIST</h1>
    <ul>
    {
      a()
    }
    </ul>
  </div>
  );
}

function a()
{
  var arr=[];
  for(var i=0;i<10;i++)
  {
    arr.push(<li> {i} </li>)
  }
  return arr;
}


export default App;
