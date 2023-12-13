import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const SortByDropDown = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get('topic')
  

  const items = [
    {
      label: <Link to={(topic) ? `/articles/?sort_by=author&order=ASC&topic=${topic}` : `/articles/?sort_by=author&order=ASC`}>Author</Link>,
      key: "1",
    },
    {
      label: (
        <Link to={(topic) ? `/articles/?sort_by=created_at&topic=${topic}` : `/articles/?sort_by=created_at`}>Most Recent</Link>
      ),
      key: "2",
    },
    {
      label: <Link to={(topic) ? `/articles/?sort_by=title&order=asc&topic=${topic}` : `/articles/?sort_by=title&order=asc`}>Title</Link>,
      key: "3",
    },
    {
      label: <Link to={(topic) ? `/articles/?sort_by=topic&order=asc&topic=${topic}` : `/articles/?sort_by=topic&order=asc`}>Topic</Link>,
      key: "4",
    },
  ];
  const menuProps = {
    items,
  };

  return (
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
};
export default SortByDropDown;
