import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>CoStats &copy;2020 <a target="_blank" href="https://i.kym-cdn.com/photos/images/original/001/693/402/3b6.png">WhatIsLife</a>.</span>
        <span className="ml-auto">Powered by <a target="_blank" href="https://en.wikipedia.org/wiki/Anxiety">Anxiety</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
