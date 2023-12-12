import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    label: <Link to="/articles/?sort_by=author">Author</Link>,
    key: '1'
  },
  {
    label: <Link to="/articles/?sort_by=created_at">Most Recent</Link>,
    key: '2'
  },
  {
    label: <Link to="/articles/?sort_by=title">Title</Link>,
    key: '3'
  },
  {
    label: <Link to="/articles/?sort_by=topic">Topic</Link>,
    key: '4'
  }
];
const menuProps = {
  items
};
const SortByDropDown = () => (
  <Space wrap>
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Sort By
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
);
export default SortByDropDown;