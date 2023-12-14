import "./App.css";
import Header from "./components/Header";
import ViewAllArticles from "./pages/ViewAllArticles";
import ViewSingleArticle from "./pages/ViewSingleArticle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { UserProvider } from "./contexts/UserContext";
import FilterByTopicPage from "./pages/FilterByTopicPage";
import SortedArticlesList from "./components/SortedArticlesList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RouteNotFound from "./error-handling/RouteNotFound";
import ComingSoon from "./pages/ComingSoon";
const myTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#022b3a',
    },
    secondary: {
      main: '#bf98a0',
    },
    background: {
      default: '#e1e5f2',
      paper: '#022b3a',
    },
  },
  typography: {
    fontFamily: 'Outfit',
  },
});


function App() {
  return (
    <ThemeProvider theme={myTheme}>
    <UserProvider>
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/articles" element={<ViewAllArticles />} />
          <Route path="/articles/:article_id" element={<ViewSingleArticle />} />
          <Route path="/topics" element={<FilterByTopicPage />} />
          <Route path="/user_profile" element={<ComingSoon />} />
          <Route path="/articles/post_new_article" element={<ComingSoon />} />
          <Route path="*" element={<RouteNotFound />}/>
        </Routes>
      </div>
    </BrowserRouter>
    </UserProvider>
    </ThemeProvider>
  );
}

export default App;
