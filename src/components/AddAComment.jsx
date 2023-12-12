import { useState, useEffect } from "react";
import { CommentOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { postComment } from "../../api";
import { useParams } from "react-router-dom";

const AddNewComment = (props) => {
  const { article_id } = useParams();
  const { comments, setComments } = props;
  const [commentBody, setCommentBody] = useState();
  const [newComment, setNewComment] = useState({
    username: "grumpy19",
    body: "",
  });

  const focusOnCommentBox = () => {
    document.getElementById("add-comment").focus();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setNewComment({ ...newComment }, (newComment.body = commentBody));

    postComment(article_id, newComment).then((newCommentFromAPI) => {
        setCommentBody("");
        setComments((currComments) => {
          return [newCommentFromAPI, ...currComments];
        });
    });
  };

  return (
    <>
      <h3 id="add-comment-header">Add comment</h3>
      <form id="comment-input-form" onSubmit={submitHandler}>
        <label htmlFor="add-comment" className="form-label">
          <textarea
            id="add-comment"
            placeholder="Enter your comment here..."
            name="add-comment"
            value={commentBody}
            cols="44"
            rows="4"
            onChange={(event) => {
              setCommentBody(event.target.value);
            }}
          ></textarea>
          <button className="submit-comment-btn">Submit Comment</button>
        </label>
      </form>

      <FloatButton
        icon={<CommentOutlined />}
        onClick={focusOnCommentBox}
        type="primary"
        style={{
          right: 24,
        }}
      />
    </>
  );
};

export default AddNewComment;
