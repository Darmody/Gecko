import React, { Component, PropTypes } from 'react';
import { HotKeys } from 'react-hotkeys';

export default class HotKeyMap extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
  };

  render() {
    const { children } = this.props;

    const hotkeyMap = {
      focusNewCardPanel: 'ctrl+n',
      addNewCard: 'i'
    };

    const hotkeyHandlers = {
      focusNewCardPanel: () => {
        console.debug(children);
      }
    };

    return (
      <HotKeys keyMap={hotkeyMap} handlers={hotkeyHandlers}>
        {children}
      </HotKeys>
    );
  }
}
