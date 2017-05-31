import React, { PropTypes } from 'react';

const squareStyle = {
  color: '#08306b',
  background: '#ffffff',
  border: '1px solid  #43494f',
  float: 'left',
  fontSize: '24px',
  fontWeight: 'bold',
  lineHeight: '34px',
  height: '34px',
  marginRight: '-1px',
  marginTop: '-1px',
  padding: 0,
  textAlign: 'center',
  width: '34px'
};

export default function Square(props) {
    return (
        <button onClick={props.changeValue} style={squareStyle}>
            {props.value}
        </button>
    );
}

Square.defaultProps = {
    value: null
};

Square.propTypes = {
    changeValue: PropTypes.func.isRequired,
    value: PropTypes.string
};
