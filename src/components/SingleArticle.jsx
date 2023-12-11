import { useEffect, useState } from "react";
import { getArticleById } from "../../api";
import { useParams, Link } from "react-router-dom";

const SingleArticle = () => {
        const [article, setArticle] = useState();
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then((singleArticle) => {
      setArticle(singleArticle);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1 className="loading-indicator">Loading...</h1>;
  } else {
    const datePosted = new Date(article.created_at);
    return (
      <div className="single-article">
        <br></br>
        <Link to="/articles">Back to all articles</Link>
        <h1>{article.title}</h1>
        <img src={article.article_img_url} id="single-article-img" />
        <p className="topic">
          topic: {article.topic} written by: {article.author}
        </p>
        <p className="author"></p>
        <p className="body">{article.body}</p>
        <p className="created-at">{`Posted: ${datePosted.toLocaleString([], {
          day: "numeric",
          month: "numeric",
          year: "numeric",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })}`}</p>
        <p className="votes">votes: {article.votes}</p>
        <p className="comment_count">comments: {article.comment_count}</p>
      </div>
    );
    }
}

export default SingleArticle;