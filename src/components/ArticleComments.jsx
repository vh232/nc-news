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
import { patchComment } from "../../api";

const ArticleComments = () => {
  const [comments, setComments] = useState();
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useContext(UserContext);
  const [apiError, setApiError] = useState(null);
  const [upvoteClicked, setUpvoteClicked] = useState(false)
  const [downvoteClicked, setDownvoteClicked] = useState(false)

  useEffect(() => {
    getArticleComments(article_id).then((articleComments) => {
      if (articleComments.response) {
        setApiError(articleComments.response);
        setComments();
        setIsLoading(false);
      }
      setComments(articleComments);
      setIsLoading(false);
    });
  }, [isLoading]);

  const upVote = (comment_id, event) => {
    if (!upvoteClicked && downvoteClicked) {
      setDownvoteClicked(false)
      patchComment(comment_id, {inc_votes: +1})
      setComments((currComments) => {
        return currComments.map((comment) => {
          if (comment.comment_id === comment_id) {
            comment.votes += 1 
            return comment
          } else {
            return comment;
          }})
        })
    } else if (!upvoteClicked && !downvoteClicked) {
      setUpvoteClicked(true)
      setDownvoteClicked(false)
      patchComment(comment_id, {inc_votes: +1})
      setComments((currComments) => {
        return currComments.map((comment) => {
          if (comment.comment_id === comment_id) {
            console.log('matched')
            comment.votes += 1 
            return comment
          } else {
            return comment;
          }})
        })
    } 
      }
      
  
  const downVote = (comment_id, event) => {
    if (!downvoteClicked && upvoteClicked) {
    patchComment(comment_id, {inc_votes: -1})
    setUpvoteClicked(false)
    setComments((currComments) => {
      return currComments.map((comment) => {
        if (comment.comment_id === comment_id) {
          console.log('matched')
          comment.votes -= 1 
          return comment
        } else {
          return comment;
        }})
      })
    } else if (!downvoteClicked && !upvoteClicked) {
      patchComment(comment_id, {inc_votes: -1})
    setUpvoteClicked(false)
    setDownvoteClicked(true)
    setComments((currComments) => {
      return currComments.map((comment) => {
        if (comment.comment_id === comment_id) {
          console.log('matched')
          comment.votes -= 1 
          return comment
        } else {
          return comment;
        }})
      })
    }
  }


  

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
                <div key={comment.comment_id}>
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
                                upVote(comment.comment_id);
                              }}
                            />
                          ) : (
                            <ThumbUpAltIcon
                              className="votes-comments"
                              fontSize="medium"
                              tabIndex="0"
                              onClick={() => {
                                upVote(comment.comment_id);
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
                                downVote(comment.comment_id);
                              }}
                            />
                          ) : (
                            <ThumbDownAltIcon
                              className="votes-comments"
                              fontSize="medium"
                              tabIndex="0"
                              onClick={() => {
                                downVote(comment.comment_id);
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
