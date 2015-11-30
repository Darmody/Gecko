import React, { Component, PropTypes } from 'react';
import { InlineInput } from 'components';

export default class PaperAdd extends Component {
  static propTypes = {
    handleCreate: PropTypes.func.isRequired,
  }

  handleSubmit(title) {
    this.props.handleCreate({ title });
  }

  render() {
    return (
      <InlineInput
        placeholder="New Paper"
        keepEditing
        handleSubmit={::this.handleSubmit}
        autofocus
      />
    );
  }
}
