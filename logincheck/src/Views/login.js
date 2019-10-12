import React from 'react';
import Input from '../Components/input';
import Button from '../Components/button';
import '../App.css';

class App extends React.Component
{
  state={ 
      userid : "",
      pass : "",
  };

  loginUser = ()=>
  {
    console.log('dd')
    const {userid,pass} = this.state;
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    if(userid === storedName || pass === storedPw) {
       console.log('hi')
       sessionStorage.setItem("name", userid);
       this.props.onSubmit();
        //alert('ERROR');
    }else {
     
        //alert('You are loged in.');
    }

  }

  handleId = (e)=>
  {
    const val = e.target.value;
    this.setState({userid : val})
  }

  handlePass = (e)=>
  {
    const val = e.target.value;
    this.setState({pass : val})
  }



  render()
  {
    const {id,pass} = this.state;
    return (
      <div>
        <Input data={id} change={this.handleId} />
        <Input data={pass} change={this.handlePass} />
        <Button click={this.loginUser} p="Login"/>
      </div>
    )
  }
}


export default App;
