import React, { Component, PropTypes } from 'react';
import Button from '../Button';

export default class Container extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('Container previous props', this.props);
    console.log('Container updated props', nextProps);
  }

  shouldComponentUpdate() {
    console.log('Inside Container should Component Update');
    return true;
  }

  componentWillUpdate() {
    console.log('Inside Container Component will Update');
  }

  componentDidUpdate() {
    console.log('Inside Container Component did Update');
  }

  render() {
    console.log('Inside Container render');
    return (
      <span>
            {this.props.description}
          </span>
    );
  }

  componentWillUnmount() {
    console.log('Container Component will Unmount');
  }
}

Container.defaultProps = {
  description: 'Please provide content'
};

Container.propTypes = {
  description: PropTypes.number
};

