import axios from "axios";

const api = axios.create({ baseURL: "https://nc-be-project.onrender.com/api" });

export const getAllArticles = (filter, sortBy, orderBy) => {
  let url = '/articles'
  if (!filter && !sortBy && !orderBy) {
    return api.get(url).then((res) => {
      return res;
    });
  }
  if (filter && sortBy && orderBy) {
    url = `/articles/?order=${orderBy}&sort_by=${sortBy}&topic=${filter}`
  } else if (filter && sortBy) {
    url = `/articles/?sort_by=${sortBy}&topic=${filter}`
  } else if (sortBy && orderBy) {
    url = `/articles/?sort_by=${sortBy}&order=${orderBy}`
  } else if (filter && orderBy) {
    url = `/articles/?topic=${filter}&order=${orderBy}`
  } else if (sortBy) {
    url = `/articles/?sort_by=${sortBy}`
  }
  return api.get(url).then((res) => {
    return res.data.articles;
  });
};

export const getArticleById = (id) => {
  return api.get(`/articles/${id}`).then((res) => {
    return res.data.article;
  });
};

export const getArticleComments = (id) => {
  return api.get(`/articles/${id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchArticle = (id, vote) => {
  return api.patch(`/articles/${id}`, vote).then((res) => {
    return res.data.updatedArticle;
  });
};

export const filterByTopic = (topic) => {
  return api
    .get(`/articles/?topic=${topic}`)
    .then((res) => {
      return res.data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTopicsList = () => {
  return api
    .get(`/topics`)
    .then((res) => {
      return res.data.topics;
    })
    .catch((err) => {
      return err;
    });
};

export const sortArticlesBy = (sortBy) => {
  return api
    .get(`/articles/?sort_by=${sortBy}`)
    .then((res) => {
      return res.data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postComment = (id, newComment) => {
  return api
    .post(`/articles/${id}/comments`, newComment)
    .then((res) => {
      return res.data.postedComment;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const deleteOwnComment = (id) => {
  return api.delete(`/comments/${id}`).then((res) => {
    return res.status;
  });
};

export const getOrderedSort = (order, sortBy) => {
  return api.get(`/articles/?order=${order}&sort_by=${sortBy}`).then((res)=>{
    return res.data.articles
  })
}

export const getOrderedFilteredSort = (order, sortBy, filter) => {
  return api.get(`/articles/?order=${order}&sort_by=${sortBy}&topic=${filter}`).then((res)=>{
    return res.data.articles
  })
}
