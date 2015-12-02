import React, { Component, PropTypes } from 'react';
import { InlineInput } from 'components';
import styles from './CardAdd.scss';

export default class CardAdd extends Component {
  static propTypes = {
    handleCreate: PropTypes.func.isRequired,
  }

  render() {
    const { handleCreate } = this.props;

    return (
      <div clasName="row">
        <div className="col-sx-12">
          <div className={styles.addCard} >
            <div className={styles.addCardTitle}>
              New Card
            </div>
            <InlineInput
              placeholder="What todo..."
              handleSubmit={handleCreate}
              className={styles.addCardInput}
            />
          </div>
        </div>
      </div>
    );
  }
}
