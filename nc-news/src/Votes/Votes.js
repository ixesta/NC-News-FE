import React from 'react';
import axios from 'axios'

class Votes extends React.Component {


  render() {
    return (
      <div>
        <p>
          <button value={'up'} onClick={(e) => this.handleVoteClick(e)}>Vote Up</button>
          <button value={'down'} onClick={(e) => this.handleVoteClick(e)}>Vote Down</button>
        </p>
      </div>
    )
  }

  handleVoteClick = async (event) => {
    let path = 'https://ro-nc-news.herokuapp.com/api/';
    const vote = event.target.value;
    const collection = this.props.article_id ? 'articles' : 'comments';
    const id = this.props.article_id ? this.props.article_id : this.props.comment_id;
    path += `${collection}/${id}?vote=${vote}`;

    const { data } = await axios.put(path);
    this.props.updateVote(vote === 'up' ? 1 : vote === 'down' ? -1 : 0, id)
    return data;
  }
}

export default Votes;

