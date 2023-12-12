import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { useEffect, useState } from "react";
import { getArticleComments } from "../../api";
import { useParams } from "react-router-dom";
import DeleteComment from "./DeleteComment";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const ArticleComments = () => {
  const [comments, setComments] = useState();
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useContext(UserContext)

  useEffect(() => {
    getArticleComments(article_id)
      .then((articleComments) => {
        setComments(articleComments);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
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
  } else {
    return (
      <div className="article-comment-list">
        <Root>
          {comments.map((comment) => {
            const datePosted = new Date(comment.created_at);
            return (
              <div key={comment.comment_id}>
                <Divider textAlign="left">{comment.author}</Divider>
                {comment.body}
                <div className="comment-info">
                  votes: {comment.votes} posted:{" "}
                  {datePosted.toLocaleString([], {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  {username === comment.author ? <DeleteComment comment_id={comment.comment_id} comments={comments} setComments={setComments}/> : ''}
                </div>
              </div>
            );
          })}
          
        </Root>
        
      </div>
    );
  }
};

export default ArticleComments;
