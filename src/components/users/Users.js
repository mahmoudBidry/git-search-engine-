import React, { Component } from 'react';
import axios from 'axios';
import SearchUsers from './SearchUsers';
import User from './User';

export class Users extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      users : []
    }
  }

  getUsers = () => {
    //the callback is a Promise so we will use a try catch
    axios.get("https://api.github.com/users").then(
      response => {
        this.setState({
          users : response.data
        })
      })
  }

  searchUsersFromGit = (data) => {
    if(data != ''){
      axios.get(`https://api.github.com/search/users?q=${data}`).then(
        response => {
          this.setState({
            users : response.data.items
          })
      })
    }
  }

  componentDidMount(){
    this.getUsers();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <SearchUsers getUserSearch={this.searchUsersFromGit}/>
          </div>
        </div>
        <div className="row">
          {this.state.users.map(user => (
            <div className='col-md-4 ' key={user.id}>
              <User user={user} />
            </div>
          ))}
        </div>  

      </div>
    )
  }
}

export default Users