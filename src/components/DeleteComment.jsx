import { deleteOwnComment } from "../../api"

const DeleteComment = (props) => {

    const { comment_id, comments, setComments } = props

    const handleDelete = (event) => {
        event.preventDefault();
        deleteOwnComment(comment_id).then((res) => {
            if (res === 204) {
                setComments((currComments) => {
                    return currComments.map((comment) => {
                        if (comment.comment_id === comment_id) {
                            comment.body = 'deleted'
                            comment.author = 'deleted'
                            return comment
                        }
                            else {
                                return comment
                            }
                    })
                })
            }
        })
    }

    return (
        <button onClick={handleDelete} id="comment-delete-button">
        delete comment
        </button>
        
        
    )
}

export default DeleteComment;