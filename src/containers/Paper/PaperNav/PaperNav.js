import React, { Component, PropTypes } from 'react';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MenuDivider from 'material-ui/lib/menus/menu-divider';
import PaperAdd from '../PaperAdd';

export default class PaperNav extends Component {
  static propTypes = {
    currentPaperIndex: PropTypes.number.isRequired,
    papers: PropTypes.array.isRequired,
    handleCreate: PropTypes.func.isRequired,
    handleSelect: PropTypes.func.isRequired,
  }

  handleChange(event, item) {
    if (item.key) this.props.handleSelect(item.key);
  }

  render() {
    const { papers, handleCreate } = this.props;

    return (
      <Menu
        desktop
        style={{ top: 0, left: 0, right: 'auto', width: 320 }}
        onItemTouchTap={::this.handleChange}
      >
        {
          papers.map((paper, index) => (
            <MenuItem
              primaryText={paper.title}
              key={index}
            />
          ))
        }
        <MenuDivider />
        <MenuItem>
          <PaperAdd handleCreate={handleCreate} />
        </MenuItem>
      </Menu>
    );
  }
}
