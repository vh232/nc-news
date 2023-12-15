import { Card, Space } from 'antd';
import { Link } from 'react-router-dom';

const TopicCard = (props) => {

    const { topic } = props

    return (

                <Space direction="vertical" size={16} className="indv-topic-card">
                <Card
                  size="small"
                  title={topic.slug}
                  extra={<Link to={`/articles/?topic=${topic.slug}`}>View all in {topic.slug}</Link>}
                  style={{
                    width: 300,
                  }}
                >
                  <p>{topic.description}</p>
                </Card>
              </Space>
    )

}

export default TopicCard;