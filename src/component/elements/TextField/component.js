import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export default class TextInput extends React.Component {

  render() {
    const { classes, className, onChange, label } = this.props;
    return (    
      <div className={classes.wrapperText}>
        <p>{label}</p>
        <input
          className={clsx(classes.input, className)}
          onChange={onChange}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
};
