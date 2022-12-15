import React, { Component } from 'react'
import "./User.css"

export class User extends Component {
  render() {

    const {login, avatar_url, html_url, repos_url} = this.props.user;

    return (
        <div className="card">
            <img className="card-img-top" src={avatar_url} />
            <div className="card-body">
              <h4 className="card-title">{login}</h4>
              <p className="card-text">
                  <a href={"/users/"+login} className='btn btn-success'>Show more</a>
                  <a href={repos_url} className='btn btn-warning'>Repository</a>
                  <a href={html_url} className='btn btn-primary'>View profil</a>
              </p>
            </div>
        </div> 
    )
  }
}

export default User