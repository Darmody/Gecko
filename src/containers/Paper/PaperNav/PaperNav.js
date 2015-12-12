import React, { Component, PropTypes } from 'react';
import cn from 'classnames';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import PaperAdd from '../PaperAdd/PaperAdd';
import styles from './PaperNav.scss';
require('mdi/css/materialdesignicons.css');

export default class PaperNav extends Component {
  static propTypes = {
    currentPaperIndex: PropTypes.number.isRequired,
    focus: PropTypes.bool,
    papers: PropTypes.array.isRequired,
    handleCreate: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired,
  }

  handleChange(index) {
    this.props.handleSelect(parseInt(index, 10));
  }

  handleCreatePaper(data) {
    this.props.handleCreate(data);
    this.props.handleSelect(0);
  }

  render() {
    const {
      currentPaperIndex,
      papers,
      focus,
      handleCreate,
    } = this.props;

    const paperNavClasses = focus ? [styles.paperNav, styles.frostedPaperNav] : [styles.paperNav];

    return (
      <div>
        <PaperAdd
          handleCreate={handleCreate}
          focus={focus}
        />
        <div className={cn([...paperNavClasses])}>
          <Tabs
            onChange={::this.handleChange}
            value={currentPaperIndex.toString()}
            inkBarStyle={{backgroundColor: '#FFAB00'}}
          >
            {
              papers.map((paper, index) => {
                const label = index === currentPaperIndex ?
                  (<div> <i className="mdi mdi-star-circle" /> { paper.title.toUpperCase() } </div> ) :
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
      </div>
    );
  }
}
