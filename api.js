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

