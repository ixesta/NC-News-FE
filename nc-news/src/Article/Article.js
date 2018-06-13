import React from 'react';
import axios from 'axios'
class Article extends React.Component {
  state = {
    article: {}
  }
  render() {
    return (
      <section>
        <h1>Article by id (somehow)</h1>
        {this.state.article.title}
      </section>
    )
  }

  componentDidMount = async () => {
    const { article } = await this.fetchData()
    this.setState({ article })
  }

  componentDidUpdate = async (prevProps) => {
    if (prevProps !== this.props) {
      const { article } = await this.fetchData()
      this.setState({ article })
    }
  }

  fetchData = async query => {
    console.log(this.props, 'this props shitty thing')
    const { data } = this.props.match ? await axios.get(`https://ro-nc-news.herokuapp.com/api/articles/${this.props.match.params.article_id}/`) : await axios.get(`https://ro-nc-news.herokuapp.com/api/articles/`)
    return data;
  }
}

export default Article;