import React from 'react';

class Article extends React.Component {
  state = {
    article: {}
  }
  render() {
    return (
      <section>
        <h1>Article by id (somehow)</h1>
        {this.props.articles}
      </section>
    )
  }
}

export default Article;