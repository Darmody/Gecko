import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';
import { InlineInput } from 'components';
import styles from './CardAdd.scss';
require('mdi/css/materialdesignicons.css');

export default class CardAdd extends Component {
  static propTypes = {
    handleCreate: PropTypes.func.isRequired,
  }

  render() {
    const { handleCreate } = this.props;

    return (
      <div clasName="row">
        <Paper className="col-sx-12">
          <div className={styles.addCard} >
            <div className={styles.addCardTitle}>
              <i className="mdi mdi-telegram" />     New Card
            </div>
            <InlineInput
              placeholder="Gecko is wandering..."
              handleSubmit={handleCreate}
              className={styles.addCardInput}
            />
          </div>
        </Paper>
      </div>
    );
  }
}
