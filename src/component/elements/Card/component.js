import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {

  render() {
    const { classes, title, subtitle, children, } = this.props;
    return (
      <div className={classes.card}>
        <div className={classes.cardHeader}>
          <h1 className="title">{title}</h1>
          <p className="subtitle">{subtitle}</p>
        </div>
        <div className={classes.cardBody}>
          {children}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

