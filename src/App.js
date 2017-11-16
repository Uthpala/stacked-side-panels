import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './Routes';

import './App.css';

class App extends Component {
  render() {
    return (
	<Router>
		<div className='main'>
		  <ul>
		    <li>
		      <Link to='/shift/link-user'> Link User </Link>
		    </li>
		  </ul>
		  <Routes />
		</div>
	</Router>
    );
  }
}

export default App;
