import axios from "axios";
import { useEffect, useState } from "react";
import ArticlesCards from "./ArticlesCards";
import { getAllArticles } from "../../api";

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((res) => {
      setArticlesList(res.data.articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1 className="loading-indicator">Loading...</h1>;
  } else {
    return (
      <div className="articles-list">
        <ArticlesCards articlesList={articlesList} />
      </div>
    );
  }
};

export default ArticlesList;
