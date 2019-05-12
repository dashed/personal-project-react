import React, { Component } from 'react';
import Login from './components/Login';
import Forked from './components/Forked';
import Pull from './components/Pull';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userName: "",
      userRepos: [],
      searchName: true
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      userName: event.target.value
    });
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.searchUser();
  };

  searchUser = () => {
    let username = this.state.userName;
    const url = `https://api.github.com/users/${username}/events`;
    fetch(url)
      .then(results => results.json())
      .then(data => {
        if(!data.length){
          this.setState({
            searchName: false
          })
        } else {
          this.setState({
            userRepos: data,
            searchName: true
        })
      }
    })
      .catch(err => console.log(err))
  };


  render(){

    const forkedRepos = events => {
      return this.state.userRepos
        ? this.state.userRepos.filter(event => event.type === "ForkEvent")
        : "";
    };

    const pullRepos = events => {
      return this.state.userRepos
        ? this.state.userRepos.filter(event => event.type === "PullRequestEvent")
        : "";
    };


    return (
      <div className="App">
        <Login
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          userName={this.props.userName}
        />
        {this.state.searchName ? (
          <>
            <Forked results={forkedRepos(this.state.userRepos)} />
            <Pull results={pullRepos(this.state.userRepos)} />
          </>
        ) : (
          "Please try another user name"
        )}
      </div>
    );

  }
}

export default App;
