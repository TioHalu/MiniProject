import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonFilled extends React.Component {

  render() {
    const { classes, children, onClick } = this.props;
    return (
      <button className={classes.button} onClick={onClick}>
        {children}
      </button>
    );
  }
}

ButtonFilled.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  onClick: PropTypes.func,
};

