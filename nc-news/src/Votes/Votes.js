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
    const vote = event.target.value
    const { data } = await axios.put(`https://ro-nc-news.herokuapp.com/api/articles/${this.props.article_id}?vote=${vote}`)
    this.props.updateVote(vote === 'up' ? 1 : vote === 'down' ? -1 : 0)
    return data;
  }
}

export default Votes;

