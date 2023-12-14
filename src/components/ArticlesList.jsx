import { useEffect, useState } from "react";
import ArticlesCards from "./ArticlesCards";
import { filterByTopic, getAllArticles} from "../../api";
import { useSearchParams } from "react-router-dom";
import ErrorPage from '../error-handling/ErrorPage'

const ArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicFilter = searchParams.get("topic")
  const [apiError, setApiError] = useState(null)

  if (topicFilter) {
    useEffect(() => {
      filterByTopic(topicFilter).then((articles) => {
        if (articles.response) {
          setApiError(articles.response)
          setIsLoading(false)
          setArticlesList();
        }
        setArticlesList(articles);
        setIsLoading(false);
      })
    }, [topicFilter]) 

  if (isLoading) {
    return <h1 className="loading-indicator">Loading...</h1>;
  } else if (apiError) {
    return <ErrorPage message={apiError.data.msg}/>
  } {
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
