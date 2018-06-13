import React from 'react';

class Articles extends React.Component {

  render() {
    console.log(this.props.topic.pathname)
    return (
      <div>
        {this.props.articles.map(article => <p>{article.title}</p>)}
      </div>
    )
  }
}

export default Articles;

