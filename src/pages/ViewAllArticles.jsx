import ArticlesList from "../components/ArticlesList";
import { useSearchParams } from "react-router-dom";
import SortedArticlesList from "../components/SortedArticlesList";
import SortByDropDown from "../components/SortByDropDown";
import FilterByDropDown from "../components/FilterByDropDown";

const ViewAllArticles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortedBy = searchParams.get("sort_by");

  if (sortedBy) {
    return (
      <>
      <div className="dropdown-menus">
      <SortByDropDown />
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
