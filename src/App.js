import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './reset.css';
import './index.css'
import Home from './Home'
import Article from './Article/Article';
import Topics from './Topics/Topics';
import Error404 from './Error404/Error404';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className='header'>

            <Link to='/'>
              <button className='button' id='home'>Home</button>
            </Link>

            <div className='topics'>
              <Link to="/topics/coding">
                <button className='button' id='button-topics'>Coding</button>
              </Link>

              <Link to="/topics/cooking">
                <button className='button' id='button-topics'>Cooking</button>
              </Link>

              <Link to="/topics/football">
                <button className='button' id='button-topics'>Football</button>
              </Link>
            </div>

            <h1 id='title'>NORTHCODERS NEWS</h1>

          </div>
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
