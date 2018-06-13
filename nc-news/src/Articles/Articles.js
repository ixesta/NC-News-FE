import React from 'react';
import { Route, Link } from 'react-router-dom';

class Articles extends React.Component {

  render() {

    return (
      <div>
        {this.props.articles.map(article => <Link to={`/article/${article._id}`}><p>{article.title}</p></Link>)}
      </div>
    )
  }
}

export default Articles;


