import React, { Component, PropTypes } from 'react';
import { HotKeys } from 'react-hotkeys';

export default class InlineInput extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    editable: PropTypes.bool,
    className: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value || '',
      placeholder: this.props.placeholder || 'type here...',

      keyMap: {
        'submit': 'enter'
      },

      handlers: {
        'submit': () => { this.submit(); }
      }
    };
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
  }

  handleChange(event) {
    this.input(event.target.value);
  }

  render() {
    const { className } = this.props;
    return (
      <HotKeys {...this.state} >
        <input
          {...this.state}
          className={className}
          onChange={::this.handleChange}
        />
      </HotKeys>
    );
  }
}
