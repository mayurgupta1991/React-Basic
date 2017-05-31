import React, { PropTypes } from 'react';
const buttonStyle = {
  padding: '8px',
  fontSize: '12px',
  margin: '4px 0'
};
export default function Button({ eventHandler, description }) {
  return (
    <div>
      <button onClick={eventHandler} style={buttonStyle}>
        {description}
      </button>
    </div>
  );
}

Button.defaultProps = {
  eventHandler: () => {},
  description: 'Please add a description'
};

Button.propTypes = {
  eventHandler: PropTypes.func,
  description: PropTypes.string
};


