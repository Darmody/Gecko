import React, { Component, PropTypes } from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import styles from './PaperNav.scss';

export default class PaperNav extends Component {
  static propTypes = {
    currentPaperIndex: PropTypes.number.isRequired,
    papers: PropTypes.array.isRequired,
    handleCreate: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired,
  }

  handleChange(index) {
    this.props.handleSelect(parseInt(index, 10));
  }

  render() {
    const { currentPaperIndex, papers, /** handleCreate **/ } = this.props;

    return (
      <div className={styles.paperNav}>
        <Tabs
          onChange={::this.handleChange}
          value={currentPaperIndex.toString()}
          inkBarStyle={{backgroundColor: '#fff'}}
        >
          {
            papers.map((paper, index) => {
              const label = index === currentPaperIndex ?
                paper.title.toUpperCase() :
                (<h3>{paper.title[0].toUpperCase()}</h3>);

              return (
                <Tab
                key={index}
                className={styles.paperNavTab}
                label={label}
                value={index.toString()}
                />
              );
            })
          }
        </Tabs>
      </div>
    );
  }
}
