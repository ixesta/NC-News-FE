import React from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class Topics extends React.Component {
  state = {
    articles: []
  }

  render() {
    return (

      <div className='articles'>
        {this.state.articles.map((article, i) => <Link key={i} to={`/article/${article._id}`}><div className='article-list'><p className='article-title'>{article.title}</p> <p className='article-by'>by {article.created_by.username}</p></div></Link>)}
      </div>
    )
  }

  componentDidMount = async () => {
    try {
      const { articles } = await this.fetchData()
      this.setState({ articles })
    } catch (err) {
      if (err.response.status === 404 || err.response.status === 400) {
        this.props.history.push('/404');
      } else {
        this.props.history.push('/500');
      }
    }
  }

  componentDidUpdate = async (prevProps) => {
    if (prevProps !== this.props) {
      const { articles } = await this.fetchData()
      this.setState({ articles })
    }
  }

  fetchData = async query => {
    const { data } = this.props.match ? await axios.get(`https://ro-nc-news.herokuapp.com/api/topics/${this.props.match.params.topic}/articles/`) : await axios.get(`https://ro-nc-news.herokuapp.com/api/articles/`)
    return data;
  }
}

export default Topics;