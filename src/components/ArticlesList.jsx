import { useEffect, useState } from "react";
import ArticlesCards from "./ArticlesCards";
import { filterByTopic, getAllArticles, sortArticlesBy } from "../../api";
import { useSearchParams } from "react-router-dom";

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicFilter = searchParams.get("topic")

  if (topicFilter) {
    useEffect(() => {
      filterByTopic(topicFilter).then((articles) => {
        setArticlesList(articles);
        setIsLoading(false);
      })
    }) 

  if (isLoading) {
    return <h1 className="loading-indicator">Loading...</h1>;
  } else {
    return (
      <div className="articles-list">
        <h2>You are viewing articles in: {topicFilter}</h2>
        <ArticlesCards articlesList={articlesList} />
      </div>
    );
  }

  } else {
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
}


export default ArticlesList;
