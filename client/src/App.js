import React, { Component } from 'react';
import './App.css';
import PageNavigation from './PageNavigation';
import Table from './Table';

class App extends Component {
  state = {
    schools: [],
    max: 0,
    curr: 0
  }

  componentDidMount() {
    this.load();
  }

  load = () => {
    this.fetchSchools()
      .then(res => {
        this.setState({ schools: res, max: (res.length / 5) - 1 })
      })
      .catch(err => console.log(err));
  }

  fetchSchools = async () => {
    const response = await fetch(`/colleges`);
    const body = await response.json();
    return body;
  };

  setPage = (page) => {
    this.setState({ curr: page})
  }

  render() {
    return (
      <div className="App">
        <Table schools={this.state.schools.slice(this.state.curr * 5, (this.state.curr * 5) + 5)} />
        <PageNavigation
          max={this.state.max}
          curr={this.state.curr}
          onChange={this.setPage}
        />
      </div>
    );
  }
}

export default App;
