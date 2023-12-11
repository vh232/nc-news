import axios from 'axios'

const api = axios.create({ baseURL: "https://nc-be-project.onrender.com/api"});

export const getAllArticles = () => {
    return api.get("/articles").then((res) => {
        return res
    })
}

