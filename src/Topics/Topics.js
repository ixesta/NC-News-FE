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
        {/* {this.state.articles.map(article => <p>{article.title}</p>)} */}
        {this.state.articles.map(article => <Link to={`/article/${article._id}`}><p>{article.title}</p></Link>)}
      </div>
    )
  }
  // componentDidMount = async () => {
  //   const { articles } = await this.fetchData()
  //   this.setState({ articles })
  // }

  componentDidMount = async () => {
    try {
      const { articles } = await this.fetchData()
      console.log(articles)
      this.setState({ articles })
    } catch (err) {
      console.log(err)
      if (err.response.status === 404 || err.response.status === 400) this.props.history.push('/404');
      this.props.history.push('/404');
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