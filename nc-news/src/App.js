import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import './index.css'
import Home from './Home'
import Article from './Article/Article';
import Topics from './Topics/Topics';
import Error404 from './Error404/Error404';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='header'>

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

          <h1>NORTHCODERS NEWS</h1>

          <Route exact path="/" component={Home} />
          <Route path="/article/:article_id" component={Article} />
          {/* <Route path="/comments" component={Comments} /> */}
          <Route path="/topics/:topic" component={Topics} />
          <Route path="/404" component={Error404} />

        </div>
      </Router >
    )
  }
}

export default App;
