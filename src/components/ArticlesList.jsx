import axios from "axios";
import { useEffect, useState } from "react";
import ArticlesCards from "./ArticlesCards";

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    axios.get("https://nc-be-project.onrender.com/api/articles").then((res) => {
      setArticlesList(res.data.articles);
    });
  }, []);

  return (
    <div className="articles-list">
        <ArticlesCards articlesList={articlesList} />
    </div>
  );
};

export default ArticlesList;
