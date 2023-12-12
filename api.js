import axios from 'axios'

const api = axios.create({ baseURL: "https://nc-be-project.onrender.com/api"});

export const getAllArticles = () => {
    return api.get("/articles").then((res) => {
        return res
    })
}

export const getArticleById = (id) => {
    return api.get(`/articles/${id}`).then((res) => {
        return res.data.article
    })
}

export const getArticleComments = (id) => {
    return api.get(`/articles/${id}/comments`).then((res) => {
        return res.data.comments
    })
}

export const patchArticle = (id, vote) => {
    return api.patch(`/articles/${id}`, vote).then((res) => {
        return res.data.updatedArticle
    })
}

<<<<<<< HEAD
export const postComment = (id, newComment) => {
    return api.post(`/articles/${id}/comments`, newComment).then((res) => {
        return res.data.postedComment
    }).catch((err) => {
        console.log(err)
        return err
=======
export const deleteOwnComment = (id) => {
    return api.delete(`/comments/${id}`).then((res) => {
        return res.status
>>>>>>> main
    })
}