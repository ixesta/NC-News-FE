import React from 'react';
import axios from 'axios'
import Comments from '../Comments/Comments';
class Article extends React.Component {
  state = {
    article: {}
  }
  render() {
    return (

      <section>
        <h1>{this.state.article.title}</h1>
        {this.state.article.body}
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
}

export default Article;