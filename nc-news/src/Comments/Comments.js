import React from 'react';
import axios from 'axios';
import Votes from '../Votes/Votes'

class Comments extends React.Component {
  state = {
    comments: [{ votes: 0 }],
    input: ''
  }
  render() {
    return (
      <section>
        {this.state.comments.map(comment => {
          return <div>
            <p>Comment: {comment.body}</p>
            <p>Votes: {comment.votes}</p>
            <Votes comment_id={comment._id} updateVote={this.updateVote} />
          </div>
        })}
        <div>
          <form>
            <input onChange={this.handleInput} value={this.state.input} />
            <button className='button' type='Submit' onClick={this.postComment}>Submit your comment</button>
          </form>
        </div>
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
    return data;
  }

  updateVote = (direction, id) => {
    const { comments } = this.state;
    const commentsCopy = [...comments];
    const index = commentsCopy.findIndex(({ _id }) => _id === id);
    commentsCopy[index].votes += direction;
    this.setState({ comments: commentsCopy })
  }

  postComment = (event) => {
    const { comments } = this.state;
    const commentsCopy = [...comments];
    event.preventDefault();
    axios
      .post(`http://ro-nc-news.herokuapp.com/api/articles/${this.props.article_id}/comments/`, { body: this.state.input })
      .then((res) => {
        this.setState({ comments: [...comments, res.data] })
      })
  }


  handleInput = (event) => {
    event.preventDefault();
    const input = event.target.value;
    this.setState({ input })
  }
}

export default Comments;