import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const withSidePanel = (WrappedComponent, { goBack = false, goTo = false, goToText='' }) => {
  return class extends Component {
    render(){
      return (
        <div className='side-panel'>
          <div>
            { goBack && <button onClick={this.props.history.goBack}> Go Back </button> }
            { goTo && <Link to={goTo} > { goToText } </Link> }
            <h3> Title </h3>
          </div>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}

export default withSidePanel;
