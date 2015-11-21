import React, { Component, PropTypes } from 'react';
import styles from './Panel.scss';

export default class Panel extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    const { children } = this.props;

    return (
      <div className={styles.panel}>
        {children}
      </div>
    );
  }
}
