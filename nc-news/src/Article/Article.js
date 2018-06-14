import React from 'react';
import axios from 'axios'
import Comments from '../Comments/Comments';
import Votes from '../Votes/Votes'
class Article extends React.Component {
  state = {
    article: {
      votes: 0
    }
  }
  render() {
    return (

      <section>
        <h1>{this.state.article.title}</h1>
        <h4>{this.state.article.body}</h4>
        <p>Votes: {this.state.article.votes}</p>
        <Votes article_id={this.state.article._id} updateVote={this.updateVote} handleVoteClick={this.handleVoteClick} />
        <p><h3>Comments: </h3></p>
        <Comments article_id={this.state.article._id} />
      </section>

    )
  }

  componentDidMount = async () => {
    const { article } = await this.fetchData()
    this.setState({ article })
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