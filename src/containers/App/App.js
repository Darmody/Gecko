import React, { Component, PropTypes } from 'react';
import styles from './App.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div className={styles.app}>
        {this.props.children}
      </div>
    );
  }
}
