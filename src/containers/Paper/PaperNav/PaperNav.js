import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import PaperAdd from './PaperAdd';

export default ({ papers, handleCreate, handleSelect }) => {

  function handleChange(_event, index) {
    handleSelect(index);
  }

  return (
    <LeftNav
      onChange={handleChange}
    >
      {
        papers.map((paper, index) => (
          <div key={index}>
            <MenuItem primaryText={paper.title} />
          </div>
        ))
      }
      <MenuItem>
        <PaperAdd handleCreate={handleCreate} />
      </MenuItem>
    </LeftNav>
  );
};
