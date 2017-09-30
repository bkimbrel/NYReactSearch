import React, { Component } from 'react';
import Form from '../../components/form';
class Main extends Component {
  constructor() {
    super();
    this.state ={
      searchTerm: '',
      records: 5,
      startYear: '',
      endYear: '',
    }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleSearchChange = this.handleSearchChange.bind(this);
  this.handleRecordChange = this.handleRecordChange.bind(this);
  this.handleStartYearChange = this.handleStartYearChange.bind(this);
  this.handleEndYearChange = this.handleEndYearChange.bind(this);
  }
  handleSubmit(e){
    console.log("full state obj", this.state);
    e.preventDefault();
  }
  handleSearchChange(e){
    this.setState({ searchTerm: e.target.value});
  }
  handleRecordChange(e){
    this.setState({ records: e.target.value});
  }
  handleStartYearChange(e){
    this.setState({ startYear: e.target.value});
  }
  handleEndYearChange(e){
    this.setState({ endYear: e.target.value});
  }
  render() {
    const { searchTerm, records, startYear, endYear}=this.state
    return (
      <div>
        <Form
          handleSubmit={this.handleSubmit}
          handleSearchChange={this.handleSearchChange}
          handleRecordChange={this.handleRecordChange}
          handleStartYearChange={this.handleStartYearChange}
          handleEndYearChange={this.handleEndYearChange}
          searchTerm={searchTerm}
          records={records}
          startYear={startYear}
          endYear={endYear}

        />
      </div>
    );
  }
}

export default Main;
