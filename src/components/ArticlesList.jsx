import axios from "axios";
import { useEffect, useState } from "react";
import ArticlesCards from "./ArticlesCards";
import { filterByTopic, getAllArticles } from "../../api";
import { useSearchParams } from "react-router-dom";

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicFilter = searchParams.get("topic")

  if (topicFilter) {
    useEffect(() => {
      filterByTopic(topicFilter).then((res) => {
        console.log(res, 'response')
      })
    })
  } else {

  useEffect(() => {
    getAllArticles().then((res) => {
      setArticlesList(res.data.articles);
      setIsLoading(false);
    });
  }, []);
}

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
