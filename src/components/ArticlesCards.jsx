import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const ArticlesCards = (props) => {


  const { articlesList } = props;
 
  return (
    
    <div className="articles-cards">
    {articlesList.map((article) => {
       return <div className="article-card" key={article.article_id}>
  <Card
  className="ant-card"
    cover={
      <img
        id="ant-card-image"
        alt="example"
        src={article.article_img_url}
        
      />
    }
    actions={[
       article.author ,
      `${article.votes} votes`,
      `${article.comment_count} comments`
    ]}
  >
    <Meta
      title={article.title}
    />
  </Card>
  </div>
     })}
     </div>
  )
};

export default ArticlesCards;
