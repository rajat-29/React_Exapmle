import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Greet from './components/Greet';
import FunctionClick from './components/FunctionClick';

function App() {
  return (
    <div className="App">
      <Counter />
      <Greet name="Rajat" />
      <FunctionClick />
    </div>
  );
}

export default App;
