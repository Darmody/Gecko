import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Input } from 'antd/lib/input';

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
      <Input
        id="title"
        size="large"
        {...fields.title}
        onKeyDown={::this.handleKeyDown}
      />
    );
  }
}
