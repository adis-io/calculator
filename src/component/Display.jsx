import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

export default class Display extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <div className="component-display">
        <div>{value}</div>
      </div>
    );
  }
}

Display.propTypes = {
  value: PropTypes.string,
};
