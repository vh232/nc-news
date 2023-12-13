import { useEffect, useState } from "react";
import ArticlesCards from "./ArticlesCards";
import {
  filterByTopic,
  getAllArticles,
  getOrderedFilteredSort,
  getOrderedSort,
  sortArticlesBy,
} from "../../api";
import { useSearchParams } from "react-router-dom";

const SortedArticlesList = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topicFilter = searchParams.get("topic");
  const selectedSortBy = searchParams.get("sort_by");
  const selectedFilterBy = searchParams.get("topic");
  const orderBy = searchParams.get("order");

 
  useEffect(() => {
    getAllArticles(selectedFilterBy, selectedSortBy, orderBy).then((articles) => {
      setArticlesList(articles);
      setIsLoading(false)
    })
  }, [selectedSortBy, selectedFilterBy, orderBy])


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
