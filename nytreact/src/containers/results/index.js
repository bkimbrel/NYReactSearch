import React, { Component } from 'react';

class Results extends Component {
  render() {
    console.log('These are the results!!');

    return (
      <div>
        {this.props.articles.map((article, i) => {
          return (
            <div key={`${article.headline.main}-${i}`}>{article.headline.main}</div>
          )
        })}
      </div>

    );
  }
}

export default Results;
