import React, { Component } from 'react';
import './App.css';
import PageNavigation from './PageNavigation';
import Schools from './Schools';

class App extends Component {
  state = {
    schools: [],
    max: 0,
    curr: 0,
    page: [],
    field: "name"
  }

  pageSize = 5;

  // static getDerivedStateFromError(error) {
  //   return { hasError: true };  
  // }

  componentDidMount() {
    this.fetchSchools()
      .then(res => {
        this.setState({ schools: res, max: Math.ceil(res.length / this.pageSize) - 1, page: this.sliceSchools(0, res) });
      })
  }

  fetchSchools = async () => {
    const response = await fetch(`/colleges`);
    const body = await response.json();
    return body;
  };

  onPageChange = (next) => this.setState({ curr: next, page: this.sliceSchools(next) });
  sliceSchools = (next, schools) => (schools || this.state.schools).slice(next * this.pageSize, (next * this.pageSize) + this.pageSize);

  sortBy = (field) => () => {
    const schools = this.state.schools.sort((a, b) => a[field] > b[field]);
    const page = this.sliceSchools(this.state.curr);
    this.setState({ schools, page, field });
  }

  render() {
    return (
      <div className="App container">
        <h1>NY Colleges</h1>
        <Schools
          schools={this.state.page}
          onNameClick={this.sortBy("name")}
          onStateClick={this.sortBy("state")}
          onNumStudentsClick={this.sortBy("numStudents")}
          onAdminssionRateClick={this.sortBy("admissionRate")}
          highlight={this.state.field}
        />
        <PageNavigation
          max={this.state.max}
          curr={this.state.curr}
          onChange={this.onPageChange}
        />
      </div>
    );
  }
}

export default App;
