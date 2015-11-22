import React, { Component, PropTypes } from 'react';
import styles from './Panel.scss';

export default class Panel extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
      React.PropTypes.array, React.PropTypes.element,
    ])
  }

  render() {
    const { onClick, children } = this.props;

    return (
      <div className={styles.panel} onClick={onClick}>
        {children}
      </div>
    );
  }
}
