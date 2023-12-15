import { useEffect, useState } from "react";
import { getArticleById, patchArticle } from "../../api";
import { useParams, Link } from "react-router-dom";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ErrorPage from "../error-handling/ErrorPage";

const SingleArticle = () => {

  const [article, setArticle] = useState();
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [upvoteClicked, setUpvoteClicked] = useState(false)
  const [downvoteClicked, setDownvoteClicked] = useState(false)
  const [apiError, setApiError] = useState(null)

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
      if (singleArticle.response) {
        setApiError(article.response)
        setIsLoading(false);
        setArticle({})
      }
      setArticle(singleArticle)
      setIsLoading(false);
    })
  }, [article, apiError]);

  if (isLoading) {
    return <h1 className="loading-indicator">Loading...</h1>;
  } else if (apiError) {
    return <ErrorPage message={apiError.data.msg} />
  } else {
    const datePosted = new Date(article.created_at);
    return (
      <div className="single-article">
        <br></br>
        
        <Link to="/articles" className="back-arrow"><ArrowBackIcon fontSize="large"/></Link>
        <section className="article-title">
          <div className="title-info-container">
        <h1>{article.title}</h1>
        <section className="article-info-bubbles">
          <span className="article-info">Topic: {article.topic}</span> <span className="article-info">
          Written by: {article.author}</span> <p><span className="article-info">{`Posted: ${datePosted.toLocaleString([], {
          day: "numeric",
          month: "numeric",
          year: "numeric",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })}`}</span></p>
        </section>

        </div>
        <img className="single-article-img" src={article.article_img_url}/>
        </section>
        <section className="article-body">
          <div className="vote-grid">
        {!upvoteClicked ? <ThumbUpAltIcon  className="votes" fontSize="large" tabIndex='0' onClick={() => {upVote(article.article_id)}}/> : <ThumbUpAltIcon className="votes-clicked" fontSize="large" tabIndex='0' onClick={() => {upVote(article.article_id)}}/>}<br></br>
        <span className="vote-value">{article.votes}</span><br></br>
        {!downvoteClicked ?  <ThumbDownAltIcon className="votes" fontSize="large" tabIndex='0' onClick={() => {downVote(article.article_id)}}/> : <ThumbDownAltIcon className="votes-clicked" fontSize="large" tabIndex='0' onClick={() => {downVote(article.article_id)}}/>}  <br></br>
        <p>  comments:<br></br><span className="vote-value">{article.comment_count}</span></p>
        </div>
        <p className="article-body-text">{article.body}</p>
        </section>
         
         
       
        
        <hr></hr>
      </div>

    );
    }
  }

export default SingleArticle;