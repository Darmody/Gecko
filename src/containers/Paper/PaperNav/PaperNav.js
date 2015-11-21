import React, { Component } from 'react';
import Menu from 'antd/lib/menu';
import styles from './PaperNav.scss';

export default class PaperNav extends Component {

  render() {
    const papers = ['Gecko', 'Prime-server', 'Prime-shell-react'];

    return (
      <Menu
        style={{width: '100%'}}
        className={styles.paperNav}
        mode="inline"
      >
        {
          papers.map((paper) => (
            <Menu.Item
              key={paper}
            >
              <span>{paper}</span>
            </Menu.Item>
          ))
        }
      </Menu>
    );
  }
}
