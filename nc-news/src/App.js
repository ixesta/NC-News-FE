import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Article from './Article/Article';
import Topics from './Topics/Topics'

class App extends Component {
  render() {
    return (
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
        <Route path="/topics/:topic/" component={Topics} />
      </div>
    )
  }
}

export default App;
