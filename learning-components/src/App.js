import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <Counter />
      <Greet name="Rajat" />
      <FunctionClick />
      <EventBind />
    </div>
  );
}

export default App;
