import React, { Component } from 'react';

class Results extends Component {
  render() {
    console.log('These are the results!!');

    return (
      <div>
        {this.props.articles.map((article, i) => {
          return (
            <div>
            <div key={`${article.headline.main}-${i}`}>
              {article.headline.main}
            </div>
            <button className='btn btn-primary' onClick={(e) => this.props.handleSaved(e, article)}>
              Save
            </button>
            </div>
          )
        })}
      </div>

    );
  }
}

export default Results;
