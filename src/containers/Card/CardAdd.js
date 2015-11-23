import React, { Component, PropTypes } from 'react';
import { InlineInput } from 'components';

export default class cardAdd extends Component {
  static propTypes = {
    handleCreate: PropTypes.func.isRequired,
  }

  render() {
    const { handleCreate } = this.props;

    return (
      <div>
        <InlineInput
          placeholder="New Card"
          keepEditing
          handleSubmit={handleCreate}
        />
      </div>
    );
  }
}
