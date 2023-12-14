import { useEffect, useState } from "react";
import ArticlesCards from "./ArticlesCards";
import {
  getAllArticles
} from "../../api";
import { useSearchParams } from "react-router-dom";
import ErrorPage from '../error-handling/ErrorPage'

const SortedArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicFilter = searchParams.get("topic");
  const selectedSortBy = searchParams.get("sort_by");
  const selectedFilterBy = searchParams.get("topic");
  const orderBy = searchParams.get("order");
  const [apiError, setApiError] = useState();

 
  useEffect(() => {
    getAllArticles(selectedFilterBy, selectedSortBy, orderBy).then((articles) => {
      if (articles.response) {
        setApiError(articles.response)
        setArticlesList([])
        setIsLoading(false);
      }
      setArticlesList(articles);
      setIsLoading(false)
    })
  }, [selectedSortBy, selectedFilterBy, orderBy])


  if (isLoading) {
    return <h1 className="loading-indicator">Loading...</h1>;
  } else if (apiError) {
    return <ErrorPage message={apiError.data.msg}/>
  } {
    return (
      <div className="articles-list">
        <ArticlesCards articlesList={articlesList} />
      </div>
    );
  }
};

export default SortedArticlesList;
