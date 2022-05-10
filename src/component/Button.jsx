import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default class Button extends React.Component {
  handleClick = () => {
    const { clickHandler, name } = this.props;
    clickHandler(name);
  };

  render() {
    const { name, orange, wide } = this.props;
    const className = [
      'component-button',
      orange ? 'orange' : '',
      wide ? 'wide' : '',
    ];

    return (
      <div className={className.join(' ').trim()}>
        <button type="button" onClick={this.handleClick}>{name}</button>
      </div>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};
