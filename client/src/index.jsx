import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }


  }

  getRepos(term) {

    $.ajax({
      type: 'GET',
      url: '/repos',
      success: (data) => {
        console.log('data from getRepos', data)
        this.setState({
          repos: data
        })
      },
      error: (error) => {
        console.log('error from getRepos', error)
      }
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    
    $.ajax({
      type: 'POST',
      url: '/repos',
      data: {term},
      success: (data) => {
        console.log('data:', data)
        this.getRepos(term);
      },
      error: (error) => {
        console.log('error from search', error)
      }
    })
  }

  


  render () {
    this.getRepos()
    return (
      <div>
      <h1>Github Fetcher</h1>
      <h2>TOP 25 Repos in Github </h2>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));