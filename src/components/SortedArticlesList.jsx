import { useEffect, useState } from "react";
import ArticlesCards from "./ArticlesCards";
import { filterByTopic, getAllArticles, getOrderedSort, sortArticlesBy } from "../../api";
import { useSearchParams } from "react-router-dom";


const SortedArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicFilter = searchParams.get("topic");
  const selectedSortBy = searchParams.get("sort_by");
  const orderBy = searchParams.get("order")
 
  if (orderBy) {
    useEffect(() => {
      getOrderedSort(orderBy, selectedSortBy).then((articles) => {
        setArticlesList(articles);
        setIsLoading(false);
      });
    }, [selectedSortBy, orderBy]);
  } else {
    useEffect(() => {
      sortArticlesBy(selectedSortBy).then((articles) => {
        setArticlesList(articles);
        setIsLoading(false);
      });
    }, [selectedSortBy, orderBy]);
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

export default SortedArticlesList;
