import React, { Component } from 'react'
import User from './User'
import axios from 'axios';
import { useParams } from "react-router-dom";



export class Useritem extends Component {

    state = {
        user : []
    }
    
    UNSAFE_componentWillMount(){
        const login = this.props.match.params.login;

        console.log(login)
        
        axios.get(`https://api.github.com/users/${login}`).then(
            response => {                
                this.setState({
                    user : response.data
                })
            }
        )
    }

    render() {
        const user = this.state.user;
        return (
        <div>
            <User user={user} />
            {/* <h1>{user}</h1> */}
        </div>
        )
    }
}

export default Useritem