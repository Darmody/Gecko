import React, { Component, PropTypes } from 'react';
import { InlineInput } from 'components';
import styles from './PaperAdd.scss';

export default class PaperAdd extends Component {
  static propTypes = {
    focus: PropTypes.bool,
    handleCreate: PropTypes.func.isRequired,
  }

  handleSubmit(title) {
    this.props.handleCreate({ title });
  }

  render() {
    const { focus } = this.props;
    const display = focus ? 'block' : 'none';

    return (
      <div
        className={styles.paperAdd}
        style={{ display }}
      >
        <InlineInput
          placeholder="New Paper"
          keepEditing
          handleSubmit={::this.handleSubmit}
          focus={focus}
        />
      </div>
    );
  }
}
