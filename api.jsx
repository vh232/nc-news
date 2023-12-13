import axios from 'axios'
import ErrorPage from './src/error-handling/ErrorPage';


const api = axios.create({ baseURL: "https://nc-be-project.onrender.com/api"});


export const getAllArticles = () => {

    return api.get("/articles").then((res) => {
        return res
    })
}

export const getArticleById = (id) => {
    return api.get(`/articles/${id}`).then((res) => {
        return res.data.article
    }).catch((err) => {
        return err;
    })
}

export const getArticleComments = (id) => {
    return api.get(`/articles/${id}/comments`).then((res) => {
        return res.data.comments
    }).catch((err) => {
        return err;
    })
}

export const patchArticle = (id, vote) => {
    return api.patch(`/articles/${id}`, vote).then((res) => {
        return res.data.updatedArticle
    }).catch((err) => {
        return err;
    })
}

export const postComment = (id, newComment) => {
    return api.post(`/articles/${id}/comments`, newComment).then((res) => {
        return res.data.postedComment
    })
}

export const deleteOwnComment = (id) => {
    return api.delete(`/comments/${id}`).then((res) => {
        return res.status
    }).catch((err) => {
        return err;
    })
}