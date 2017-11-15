import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './Routes';

import './App.css';

class App extends Component {
  render() {
    return (
			<Router>
        <div className='main'>
  				<Link to='/link-user'> Link User </Link>
          <Routes />
        </div>
			</Router>
    );
  }
}

export default App;
