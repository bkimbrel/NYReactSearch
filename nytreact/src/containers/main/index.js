import React, { Component } from 'react';
import Form from '../../components/form';
import moment from 'moment';
import Results from '../results';
class Main extends Component {
  constructor() {
    super();
    this.state ={
      searchTerm: '',
      records: 5,
      startYear: '',
      endYear: '',
      articles: [],
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
    const {searchTerm, records, startYear, endYear}=this.state;
    let start_date = startYear;
    let end_date = endYear;
    if (startYear === '') {
      start_date = moment().format('YYYYMMDD')
    }
    if (endYear === '') {
      end_date = moment().add(1, 'y').format('YYYYMMDD')
    }
    const searchQuery = {
      q: searchTerm,
      begin_date: start_date,
      end_date,
    }
    fetch('/api/search', {
    method: 'post',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(searchQuery)
  }).then((response) => response.json())
  .then((data) => {
  console.log('Created Gist:', JSON.parse(data.body));
  const articles = JSON.parse(data.body)
  this.setState({
    articles: articles.response.docs
  });
});

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
      <Results
        articles={this.state.articles}
      />
      </div>
    );
  }
}

export default Main;
