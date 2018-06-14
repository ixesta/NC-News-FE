import React from 'react';
import axios from 'axios'

class Comments extends React.Component {
  state = {
    comments: []
  }
  render() {
    return (
      <section>
        {this.state.comments.map(comment => {
          return <div>
            <p>Comment: {comment.body}</p>
            <p>Created by: {comment.created_by}</p>
          </div>

        })}
      </section>
    )
  }

  componentDidMount = async () => {
    const data = await this.fetchData()
    // this.setState({ comments })
  }

  componentDidUpdate = async (prevProps) => {
    if (prevProps.article_id !== this.props.article_id) {
      const { comments } = await this.fetchData()
      this.setState({ comments })
    }
  }

  fetchData = async () => {
    const { data } = await axios.get(`https://ro-nc-news.herokuapp.com/api/articles/${this.props.article_id}/comments/`)
    console.log(data, 'maaaaaaatch')
    return data;
  }
}

export default Comments;