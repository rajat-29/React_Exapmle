import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import JsxExample from './components/JsxExample';

class App extends Component {
 render() { 
  return (
    <div className="App">
      <Greet name="Rajat"><p>Children Prop</p></Greet>
      <Greet name="Rishabh">
        <button>Action</button></Greet>
      <Greet name="Arihant"/>
      <Welcome name="Rajat"/>
      <Welcome name="Rishabh"/>
      <Welcome name="Arihant"/>
      <JsxExample />
    </div>
  );
}
}

export default App;
