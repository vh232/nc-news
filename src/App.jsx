import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ViewAllArticles from "./pages/ViewAllArticles";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <SearchBar />
      <ViewAllArticles />
    </div>
  );
}

export default App;
