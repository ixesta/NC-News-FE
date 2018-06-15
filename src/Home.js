import React, { Component } from 'react';
import axios from 'axios';
import Articles from './Articles/Articles'

class Home extends Component {
  state = {
    articles: []
  }

  componentDidMount = async () => {
    const articles = await this.fetchData()
    this.setState({ articles })
  }

  render() {
    return (
      <div className="App">
        <Articles articles={this.state.articles} />
      </div>

    );
  }
  fetchData = async query => {
    const { data: { articles } } = await axios.get(`https://ro-nc-news.herokuapp.com/api/articles/`)
    return articles;
  }
}

export default Home;
