import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Article from './Article/Article';
import Topics from './Topics/Topics'

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Link to='/'>
            <button>Home</button>
          </Link>

          <Link to="/topics/coding">
            <button>Coding</button>
          </Link>

          <Link to="/topics/cooking">
            <button>Cooking</button>
          </Link>

          <Link to="/topics/football">
            <button>Football</button>
          </Link>

          <Route exact path="/" component={Home} />
          {/* <Route path="/topics/:topic/" component={Topics} /> */}
          <Route path="/article/:article_id" component={Article} />

        </div>
      </Router>
    )
  }
}

export default App;
