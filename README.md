# Northcoders News Front-End Project

This is a Reddit-clone, built as a front-end project during my time at Northcoders using React. It displays articles with user-rating and comments, posted under individual topics. Users are able to browse, vote on articles plus add and delete their own comments.

[View the deployed version here](https://nc-news-vh232.netlify.app)

It makes asynchronous API calls to the server I built during my back-end project which can be found [here](https://github.com/vh232/NC-be-project).
 on github and hosted [here](https://nc-be-project.onrender.com).

## Getting Started

### Minimum Requirements

- Node.js: _v20.4.0_

### Installation

1. Clone this repository

```
$ git clone https://github.com/vh232/nc-news.git
```

2. Run `npm install` to install dependencies listed in the `package.json`

3. Run `npm run dev` to host a version locally.

### How to Use

As a user you are able to:

- View a list of all articles
- View a list of available topics
- Filter articles by topic
- Sort articles by title, topic, author, date created
- Change order of sort by ascending or descending
- View an individual article
- View an article's comments
- Upvote or downvote an article (with optimistic rendering for immediate feedback)
- Add a comment to an article (as the default user) (with optimistic rendering for immediate feedback)
- Delete your comment (as the default user)
