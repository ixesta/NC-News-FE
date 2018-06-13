import React from 'react';
import axios from 'axios'

class Topics extends React.Component {
  state = {
    articles: []
  }


  render() {
    return (

      <div>
        {this.state.articles.map(article => <p>{article.title}</p>)}
      </div>
    )
  }
  componentDidMount = async () => {
    const { articles } = await this.fetchData()
    this.setState({ articles })
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