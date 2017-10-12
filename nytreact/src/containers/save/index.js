import React, { Component } from 'react';

class SavedArticles extends Component {
  constructor() {
    super();
    this.state={
      articles:[],
    }
  }
componentDidMount() {
  fetch('/api/saved')
  .then(response => response.json())
  .then((results) => {
    console.log('compont resultes', results);
    this.setState({articles: results})
  }).catch((err) => {
    console.log('error', err);
  })
}
handleDelete(e, id) {
  e.preventDefault();
  console.log("Delete article", id);
  fetch('/api/saved', {
    method:'delete',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify({id}),
  })
  .then((data) => data.json())
  .then((response) => {
    this.setState({articles: response})
  })
  .catch((err)=>console.log("eEERR", err))
}
  render() {
    if (this.state.articles.length === 0) {
    return(
      <div>loading...</div>
    )
    }
    return (
      <div>
        {this.state.articles.map((article, i) => {
          return (
            <div>
            <div key={`${article.title}-${i}`}>
              {article.title}
            </div>
            <button className='btn btn-danger' onClick={(e) => this.handleDelete(e, article._id)}>
              Delete
            </button>
            </div>
          )
        })}
      </div>
    );
  }
}

export default SavedArticles;
