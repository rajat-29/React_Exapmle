import React from 'react';
import logo from './logo.svg';
import './App.css';
import IfElse from './components/IfElse';
import ElementVariable from './components/ElementVariable';
import TernaryOperator from './components/TernaryOperator';

function App() {
  return (
    <div className="App">
      <IfElse />
      <ElementVariable />
      <TernaryOperator />
    </div>
  );
}

export default App;
