import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ViewAllArticles from "./pages/ViewAllArticles";
import ViewSingleArticle from "./pages/ViewSingleArticle";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import ArticleComments from "./components/ArticleComments";

function App() {

  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <SearchBar />
      <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/articles" element={<ViewAllArticles />}/>
      <Route path="/articles/:article_id" element={<ViewSingleArticle />}/>
      
      </Routes>

      <ArticleComments />
    </div>
    </BrowserRouter>
  );
}

export default App;
