import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import TextField from 'material-ui/lib/text-field';

@reduxForm({
  form: 'paperAdd',
  fields: [ 'title' ],
})
export default class PaperAdd extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleCreate: PropTypes.func.isRequired,
  }

  handleKeyDown(event) {
    if (event.keyCode !== 13) return;
    this.props.handleCreate({
      title: this.props.fields.title.value
    }
    );
  }

  render() {
    const { fields } = this.props;

    return (
      <TextField
        hintText="New Paper"
        {...fields.title}
        onKeyDown={::this.handleKeyDown}
      />
    );
  }
}
