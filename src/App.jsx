import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ViewAllArticles from "./pages/ViewAllArticles";
import ViewSingleArticle from "./pages/ViewSingleArticle";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <SearchBar />
      <Routes>
      <Route path="/articles" element={<ViewAllArticles />}/>
      <Route path="/articles/:article_id" element={<ViewSingleArticle />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
