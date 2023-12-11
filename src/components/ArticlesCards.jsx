import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;

const ArticlesCards = (props) => {

  
  const { articlesList } = props;
 
  return (
    
    <div className="articles-cards">
    {articlesList.map((article) => {
      let datePosted = new Date(article.created_at)
       return <div className="article-card" key={article.article_id}>
  <Card
  className="ant-card"
    cover={
      <Link to={`/articles/${article.article_id}`} >
      <img
        id="ant-card-image"
        alt="example"
        src={article.article_img_url}
        
      />
      </Link>
    }
    actions={[
       article.author ,
      `${article.votes} votes`,
      `${article.comment_count} comments`
    ]}
  >
    <Link to={`/articles/${article.article_id}`} >
    <Meta
      title={article.title}
      description={`Posted: ${datePosted.toLocaleString([], {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      })}`}
    />
    </Link>
  </Card>
  </div>
     })}
     </div>
     
  )
};

export default ArticlesCards;
