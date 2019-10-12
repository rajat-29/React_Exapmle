import React from 'react';
import '../App.css';

class App extends React.Component
{
  state={ 
      userData : [],
  };

  componentDidMount()
  {
    var {userData} = this.state;
    var xml = new XMLHttpRequest();
    xml.open("GET","https://api.github.com/users/"+this.props.match.params.name,true);
    xml.onload = ()=>
    {
      var data = xml.responseText;
      userData = JSON.parse(data);
      console.log(userData)
      this.setState({userData : userData})
    }
    xml.send();
  } 
  componentWillUnmount()
  {
    console.log('off')
  }

  render()
  {
    const {userData} = this.state;
    return (
      <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={userData.avatar_url} /></td>
            <td>{userData.name}</td>
            <td>{userData.location}</td>
             <td>{userData.bio}</td>
          </tr>
        </tbody>
      </table>

      </div>
    )
  }
}


export default App;
