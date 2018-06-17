import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class Articles extends React.Component {
  render() {
    return (
      <div className='articles'>
        {this.props.articles.map((article, i) => <Link key={i} to={`/article/${article._id}`}><div className='article-list'><p className='article-title'>{article.title}</p> <p className='article-by'>by {article.created_by.username}</p></div></Link>)}
      </div>
    )
  }
}

export default Articles;


