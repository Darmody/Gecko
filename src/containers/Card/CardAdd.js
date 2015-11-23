import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import TextField from 'material-ui/lib/text-field';

@reduxForm({
  form: 'cardAdd',
  fields: [ 'title' ],
})
export default class cardAdd extends Component {
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
        hintText="New Card"
        {...fields.title}
        onKeyDown={::this.handleKeyDown}
      />
    );
  }
}
