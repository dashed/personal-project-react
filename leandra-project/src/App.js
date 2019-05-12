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

  // componentDidMount(){
  //   const url = `https://api.github.com/users/leandrar/events`;
  //   fetch(url)
  //     .then(results => results.json())
  //     .then(data => {
  //       this.setState({
  //         userRepos: data,
  //         searchName: true
  //       })
  //     });
  // }

  handleSearch = (event) => {
    event.preventDefault();
    this.searchUser();
  };

  //TODO: instead of setstate use dispatch with redux
  //TODO: dispatch action to indicate somethign is loading
  //TODO: in app, can do loading animation?
  //TODO: dispatch: loading complete then populate state
  //TODO: add error handling for dispatch, display error message

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

  //TODO: make two functions: one for each forked & pull events



  render(){
    const forkedRepos = this.state.userRepos ? this.state.userRepos.filter(repo => repo.type === 'ForkEvent') : "";
    const pullEvents = this.state.userRepos ? this.state.userRepos.filter(repo => repo.type === 'PullRequestEvent') : "";

    return (
      <div className="App">
        <Login
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          userName={this.props.userName}
        />
        {this.state.searchName ? <><Forked results={forkedRepos} />
          < Pull results={pullEvents}/></> : "Please try another user name"}

      </div>
    );

  }
}

export default App;
