import React from 'react';
import axios from 'axios'
import Comments from '../Comments/Comments';
import Votes from '../Votes/Votes';

class Article extends React.Component {
  state = {
    article: {
      votes: 0
    }
  }
  render() {
    return (

      <section className='article-page'>

        <div>
          <h1 id='article-page-title'>{this.state.article.title}</h1>
          <h4 id='article-page-body'>{this.state.article.body}</h4>
        </div>

        <p className='article-page-votes'>Votes: {this.state.article.votes}</p>
        <div className='article-page-vote-button'>
          <Votes article_id={this.state.article._id} updateVote={this.updateVote} handleVoteClick={this.handleVoteClick} />
        </div>

        <div className='article-page-comment-box'>
          <h3>Add your comment: </h3>
          <Comments article_id={this.state.article._id} />
        </div>
      </section>
    )
  }

  componentDidMount = async () => {
    try {
      const { article } = await this.fetchData()
      this.setState({ article })
    } catch (err) {
      if (err.response.status === 404 || err.response.status === 400) this.props.history.push('/404');
      this.props.history.push('/500');
    }
  }

  componentDidUpdate = async (prevProps) => {
    if (prevProps.match.params.article_id !== this.props.match.params.article_id) {
      const { article } = await this.fetchData()
      this.setState({ article })
    }
  }

  fetchData = async query => {
    const { data } = this.props.match ? await axios.get(`https://ro-nc-news.herokuapp.com/api/articles/${this.props.match.params.article_id}/`) : await axios.get(`https://ro-nc-news.herokuapp.com/api/articles/`)
    return data;
  }

  updateVote = (direction) => {
    const { article } = this.state;
    this.setState({ article: { ...article, votes: article.votes + direction } })
  }
}

export default Article;