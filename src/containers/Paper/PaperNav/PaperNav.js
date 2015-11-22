import React from 'react';
import Menu from 'antd/lib/menu';
import styles from './PaperNav.scss';
import PaperAdd from './PaperAdd';

export default ({ papers, handleCreate, handleSelect }) => {

  function handleClick(item) {
    if (item.key === '__create') return;
    handleSelect(item.key);
  }

  return (
    <div>
      <Menu
        className={styles.paperNav}
        mode="inline"
        onClick={handleClick}
      >
        {
          papers.map((paper, index) => (
            <Menu.Item
              key={index}
            >
              <span>{paper.title}</span>
            </Menu.Item>
          ))
        }
        <Menu.Item
          key="__create"
        >
          <PaperAdd handleCreate={handleCreate} />
        </Menu.Item>
      </Menu>
    </div>
  );
};
