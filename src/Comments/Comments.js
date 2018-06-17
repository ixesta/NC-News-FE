import React from 'react';
import axios from 'axios';
import Votes from '../Votes/Votes';
import moment from 'moment';


class Comments extends React.Component {
  state = {
    comments: [],
    input: ''
  }

  render() {
    return (

      <section >

        <div>
          <form>
            <p><textarea className='input' onChange={this.handleInput} value={this.state.input} required /></p>
            <button className='button' id='submit-button' type='Submit' onClick={this.postComment}>Submit your comment</button>
          </form>
        </div>

        <div className='comments'>
          {this.state.comments.map(comment => {
            return <div className='comment'>
              <p className='comment-author'>Created by {comment.created_by.username} on the {moment(comment.created_at).format("DD MMM YYYY")}</p>
              <p>{comment.body}</p>
              <p className='comment-votes'>Votes: {comment.votes}</p>
              <Votes comment_id={comment._id} updateVote={this.updateVote} />
              {comment.created_by.username === 'tickle122' && <button className='button' id='delete-button' onClick={this.handleDeleteClick.bind(null, comment._id)}>Delete</button>}
            </div>
          })}
        </div>

      </section>
    )
  }

  componentDidMount = async () => {
    await this.fetchData();
  }


  componentDidUpdate = async (prevProps) => {
    try {
      if (prevProps.article_id !== this.props.article_id) {
        const { comments } = await this.fetchData();
        comments.sort((a, b) => b.created_at - a.created_at);
        this.setState({ comments })
      }
    } catch (err) {
      if (err.response.status === 404 || err.response.status === 400) this.props.history.push('/404');
      this.props.history.push('/500');
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
    event.preventDefault();
    axios
      .post(`http://ro-nc-news.herokuapp.com/api/articles/${this.props.article_id}/comments/`, { body: this.state.input })
      .then((res) => {
        this.setState({ comments: [...comments, res.data], input: '' })
      })
  }

  handleInput = (event) => {
    event.preventDefault();
    const input = event.target.value;
    this.setState({ input })
  }

  handleDeleteClick = async (comment_id) => {
    await axios
      .delete(`http://ro-nc-news.herokuapp.com/api/comments/${comment_id}`)
    const newComments = this.state.comments.filter(comment => comment._id !== comment_id)
    this.setState({ comments: newComments })
  }
}

export default Comments;