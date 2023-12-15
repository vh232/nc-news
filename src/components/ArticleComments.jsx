import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { useEffect, useState } from "react";
import { getArticleComments } from "../../api";
import { useParams } from "react-router-dom";
import AddNewComment from "./AddAComment";
import DeleteComment from "./DeleteComment";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import ErrorPage from "../error-handling/ErrorPage";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const ArticleComments = () => {
  const [comments, setComments] = useState();
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useContext(UserContext);
  const [apiError, setApiError] = useState(null);
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
    getArticleComments(article_id).then((articleComments) => {
      if (articleComments.response) {
        setApiError(articleComments.response);
        setComments([]);
        setIsLoading(false);
      }
      setComments(articleComments);
      setIsLoading(false);
    });
  }, []);

  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    "& > :not(style) ~ :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));

  if (isLoading) {
    return <h1 className="loading-indicator">Loading...</h1>;
  } else if (apiError) {
    return <ErrorPage message={apiError.data.msg} />;
  } else {
    return (
      <>
        <AddNewComment
          setComments={setComments}
          comments={comments}
          className="comments-section"
        />
        <div>
          <Root>
            {comments.map((comment) => {
              const datePosted = new Date(comment.created_at);
              return (
                <div>
                  <Divider textAlign="left">
                    <span id="comment-author">{comment.author}</span>{" "}
                    <span>
                      posted:{" "}
                      {datePosted.toLocaleString([], {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",
                        hour12: false,
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                    </span>{" "}
                  </Divider>
                <div key={comment.comment_id} className="whole-comment-container">
                  
                  <div className="article-comment-list">
                    <div className="comment-info">
                    
                        <div className="vote-grid-comments">
                          {!upvoteClicked ? (
                            <ThumbUpAltIcon
                              className="votes-comments"
                              fontSize="medium"
                              tabIndex="0"
                              onClick={() => {
                                upVote(article.article_id);
                              }}
                            />
                          ) : (
                            <ThumbUpAltIcon
                              className="votes-clicked-comments"
                              fontSize="medium"
                              tabIndex="0"
                              onClick={() => {
                                upVote(article.article_id);
                              }}
                            />
                          )}
                          
                          <span className="vote-value-comments">{comment.votes}</span>
                       
                          {!downvoteClicked ? (
                            <ThumbDownAltIcon
                              className="votes-comments"
                              fontSize="medium"
                              tabIndex="0"
                              onClick={() => {
                                downVote(article.article_id);
                              }}
                            />
                          ) : (
                            <ThumbDownAltIcon
                              className="votes-clicked-comments"
                              fontSize="medium"
                              tabIndex="0"
                              onClick={() => {
                                downVote(article.article_id);
                              }}
                            />
                          )}{" "}
                          <br></br>
                        </div>
               
                      {comment.body}
                    </div>
                  </div>
                  {username === comment.author ? (
                    <span id="comment-delete">
                      <DeleteComment
                        comment_id={comment.comment_id}
                        comments={comments}
                        setComments={setComments}
                      />
                    </span>
                  ) : null}
                </div>
                </div>
              );
            })}
          </Root>
        </div>
      </>
    );
  }
};

export default ArticleComments;
