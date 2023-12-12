import { useEffect, useState } from "react";
import { getArticleById, patchArticle } from "../../api";
import { useParams, Link } from "react-router-dom";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const SingleArticle = () => {

  const [article, setArticle] = useState();
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [upvoteClicked, setUpvoteClicked] = useState(false)
  const [downvoteClicked, setDownvoteClicked] = useState(false)

  const upVote = (article_id) => {
    if (!upvoteClicked && downvoteClicked) {
      setDownvoteClicked(false)
      patchArticle(article_id, {inc_votes: +1})
    } else if (!upvoteClicked && !downvoteClicked) {
      setUpvoteClicked(true)
      setDownvoteClicked(false)
      patchArticle(article_id, {inc_votes: +1})
    }
      }
      
  
  const downVote = (article_id) => {
    if (!downvoteClicked && upvoteClicked) {
    patchArticle(article_id, {inc_votes: -1})
    setUpvoteClicked(false)
    } else if (!downvoteClicked && !upvoteClicked) {
      patchArticle(article_id, {inc_votes: -1})
    setUpvoteClicked(false)
    setDownvoteClicked(true)
    }
  }

  useEffect(() => {
    getArticleById(article_id).then((singleArticle) => {
      setArticle(singleArticle)
      setIsLoading(false);
    })
  }, [article]);

  if (isLoading) {
    return <h1 className="loading-indicator">Loading...</h1>;
  } else {
    const datePosted = new Date(article.created_at);
    return (
      <div className="single-article">
        <br></br>
        <Link to="/articles">Back to all articles</Link>
        <h1>{article.title}</h1>
        <img src={article.article_img_url} id="single-article-img" />
        <p className="topic">
          topic: {article.topic} written by: {article.author}
        </p>
        <p className="author"></p>
        <p className="body">{article.body}</p>
        <p className="created-at">{`Posted: ${datePosted.toLocaleString([], {
          day: "numeric",
          month: "numeric",
          year: "numeric",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })}`}</p>
        <p className="votes"> <ThumbUpAltIcon fontSize="small" onClick={() => {upVote(article.article_id)}}/>  
        <ThumbDownAltIcon fontSize="small" onClick={() => {downVote(article.article_id)}}/>  votes: {article.votes} comments: {article.comment_count}</p>
        
        
      </div>
    );
    }
  }

export default SingleArticle;