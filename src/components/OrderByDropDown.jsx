import { useEffect } from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import { Link,  } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


const OrderByDropDown = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const selectedSortBy = searchParams.get("sort_by");
    const items = [
        {
          label: <Link to={`/articles/?order=asc&sort_by=${selectedSortBy}`}>Ascending</Link>,
          key: '1'
        },
        {
          label: <Link to={`/articles/?order=desc&sort_by=${selectedSortBy}`}>Descending</Link>,
          key: '2'
        }
      ];


      const menuProps = {
        items
      };

    return <>
  <Space wrap>
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Order By
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  </Space>
  </>
};
export default OrderByDropDown;