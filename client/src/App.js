import React, { Component } from 'react';
import './App.css';
import PageNavigation from './PageNavigation';
import Table from './Table';

class App extends Component {
  state = {
    schools: [],
    max: 0,
    curr: 0,
    page: []
  }

  pageSize = 5;

  componentDidMount() {
    this.fetchSchools()
      .then(res => {
        this.setState({ schools: res, max: (res.length / this.pageSize) - 1, page: this.sliceSchools(0, res) });
      })
  }

  fetchSchools = async () => {
    const response = await fetch(`/colleges`);
    const body = await response.json();
    return body;
  };

  onPageChange = (next) => this.setState({ curr: next, page: this.sliceSchools(next)});
  sliceSchools = (next, schools) => (schools || this.state.schools).slice(next * this.pageSize, (next * this.pageSize) + this.pageSize);

  render() {
    return (
      <div className="App">
        <Table schools={this.state.page} />
        <PageNavigation
          max={this.state.max}
          curr={this.state.curr}
          onChange={(next) => this.setState({ curr: next, page: this.sliceSchools(next)})}
        />
      </div>
    );
  }
}

export default App;
