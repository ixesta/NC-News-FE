import React from 'react';
import { Link } from 'react-router-dom';

class Articles extends React.Component {
  render() {
    return (
      <div>
        {this.props.articles.map(article => <Link to={`/article/${article._id}`}><p>{article.title}</p> <p>Created by:{article.created_by.username}</p></Link>)}
      </div>
    )
  }
}

export default Articles;


