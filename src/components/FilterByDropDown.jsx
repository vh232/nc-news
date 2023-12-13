import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    label: <Link to="/articles/?topic=football">Football</Link>,
    key: '1'
  },
  {
    label: <Link to="/articles/?topic=coding">Coding</Link>,
    key: '2'
  },
  {
    label: <Link to="/articles/?topic=cooking">Cooking</Link>,
    key: '3'
  }
];
const menuProps = {
  items
};
const FilterByDropDown = () => (
  <Space wrap>
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Filter By
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
);
export default FilterByDropDown;