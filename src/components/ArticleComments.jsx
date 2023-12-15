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

const ArticleComments = () => {
  const [comments, setComments] = useState();
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useContext(UserContext)
  const [apiError, setApiError] = useState(null)

  useEffect(() => {
    getArticleComments(article_id)
      .then((articleComments) => {
        if (articleComments.response) {
          setApiError(articleComments.response);
          setComments([]);
          setIsLoading(false);
        }
        setComments(articleComments);
        setIsLoading(false);
      })
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
    return <ErrorPage message={apiError.data.msg}/>
  } else {
    return (
      <>
      <AddNewComment setComments={setComments} comments={comments} className="comments-section"/>
      <div>
        <Root>
          {comments.map((comment) => {
            
            const datePosted = new Date(comment.created_at);
            return (
              <div key={comment.comment_id} className="article-comment-list">
                <Divider textAlign="left">{comment.author}</Divider>
                {comment.body}
                <div className="comment-info">
                  <span id='comment-votes'>
                  votes: {comment.votes}</span> <span id='comment-posted'>posted:{" "}
                  {datePosted.toLocaleString([], {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}</span>
                  
                </div>
                {username === comment.author ? <span id="comment-delete"><DeleteComment comment_id={comment.comment_id} comments={comments} setComments={setComments}/></span> : null}
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
