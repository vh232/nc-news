import ArticlesList from "../components/ArticlesList";
import { useSearchParams } from "react-router-dom";
import SortedArticlesList from "../components/SortedArticlesList";
import SortByDropDown from "../components/SortByDropDown";
import FilterByDropDown from "../components/FilterByDropDown";
import { useState } from "react";
import OrderByDropDown from "../components/OrderByDropDown";

const ViewAllArticles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortedBy = searchParams.get("sort_by");
  const filteredBy = searchParams.get("topic");

  if (sortedBy) {
    return (
      <>
      <div className="dropdown-menus">
      <SortByDropDown />
      <OrderByDropDown />
      <FilterByDropDown />
      </div>
      <SortedArticlesList />
      </>
    );
  } else {
    return (
      <>
      <div className="dropdown-menus">
        <SortByDropDown />
        <FilterByDropDown />
        </div>
        <ArticlesList />
      </>
    );
  }
};

export default ViewAllArticles;
