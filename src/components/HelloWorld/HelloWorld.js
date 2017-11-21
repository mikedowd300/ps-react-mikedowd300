import React from 'react';
import PropTypes from 'prop-types';

/** My addBass component */
const HelloWorld = ({message}) => {
  return <div>Hello {message}</div>
}

HelloWorld.propTypes = {
  /** A Description */
  message: PropTypes.string
};

HelloWorld.defaultProps = {
  message: 'World'
};

export default HelloWorld;