import SingleArticle from "../components/SingleArticle";
import ArticleComments from "../components/ArticleComments";
import AddNewComment from "../components/AddAComment";

const ViewSingleArticle = () => {
  return (
    <div className="single-article">
    <SingleArticle />
    <ArticleComments />
    </div>
  )
};

export default ViewSingleArticle;
