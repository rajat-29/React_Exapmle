import React from 'react';
import Input from '../Components/input';
import Button from '../Components/button';
import List from '../Components/ul';
import '../App.css';

class App extends React.Component
{
  state={ 
      value : "",
      todo : [],
  };

  saveTodo = ()=>
  {
    const {value,todo} = this.state;
    todo.push(value);
    this.setState({todo : todo,value : ""})
  }

  handleInput = (e)=>
  {
    const val = e.target.value;
    this.setState({value : val})
  }

  deleteItem = (i)=>
  {
    return () =>
    {
        const {todo} = this.state;
        console.log(i)
        todo.splice(i,1);
        this.setState({todo : todo})
    }
  }

  render()
  {
    const {value,todo} = this.state;
    return (
      <div>
        <Input data={value} change={this.handleInput} />
        <Button click={this.saveTodo} p="Save"/>
        <List todo={todo} deleteItem={this.deleteItem} />
      </div>
    )
  }
}


export default App;
