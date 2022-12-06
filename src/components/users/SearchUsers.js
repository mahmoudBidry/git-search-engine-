import React, { Component } from 'react'

export class SearchUsers extends Component {

    state = {
        search : "",
    }

    handleForm = (e) =>{
        this.setState({
            search : e.target.value
        })
    }

    searchUsers = (e) =>{
        e.preventDefault();
        this.props.getUserSearch(this.state.search);
    }

    render() {
        const {search} = this.state;
        return (
            <form onSubmit={this.searchUsers}>
                <div className="form-group my-2">
                    <input onChange={this.handleForm} value = {search}className="form-control" id="search" placeholder='Search users...' type="text" />
                </div>
                <button className="btn btn-danger btn-lg btn-block"> Search </button>
            </form>
        )
    }
}

export default SearchUsers