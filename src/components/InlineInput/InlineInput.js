import React, { Component, PropTypes } from 'react';
import { HotKeys } from 'react-hotkeys';
import TextField from 'material-ui/lib/text-field';

export default class InlineInput extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    keepEditing: PropTypes.bool,
    editable: PropTypes.bool,
  }

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value || '',
      hintText: this.props.placeholder || 'type here...',
      keepEditing: this.props.keepEditing || false,
      editable: this.props.editable || false,

      keyMap: {
        'edit': 'i',
        'submit': 'enter'
      },

      handlers: {
        'edit': (event) => { this.makeEditable(event); },
        'submit': () => { this.submit(); }
      }
    };
  }

  makeEditable(event) {
    event.preventDefault();
    this.setState({editable: true});
  }

  makeImmutable() {
    if (this.state.keepEditing) return;

    this.setState({editable: false});
  }

  input(value) {
    this.setState({ value });
  }

  reset() {
    this.setState({value: ''});
  }

  submit() {
    this.props.handleSubmit(this.state.value);

    this.reset();
    this.makeImmutable();
  }

  handleChange(event) {
    if (!this.state.editable && !this.state.keepEditing) return;

    this.input(event.target.value);
  }

  render() {
    return (
      <HotKeys {...this.state} >
        <TextField {...this.state} onChange={::this.handleChange} />
      </HotKeys>
    );
  }
}
