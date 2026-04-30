import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header.jsx";
import Nav from "./Nav.jsx"
import Footer from "./Footer.jsx";

import Home from "./pages/Home.jsx";
import Post from "./pages/Post.jsx";
import About from "./pages/About.jsx"

import PostPage from "./pages/PostPage.jsx";

import "./assets/App.css";
function App() {

  // API url
  const API_URL = "http://localhost:3500/posts"

  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFail, setIsFail] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(postList);

  useEffect(() => {
    const getPostList = async () => {
      try {
        const request = {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }

        const response = await fetch(API_URL, request);
        if (!response.ok) throw Error("Fetch failed");
        const result = await response.json();
        setPostList(result);
        setIsFail(false);
      } catch (e) {
        setIsFail(true);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => getPostList(), 5000);
  }, [])

  useEffect(() => {
    setSearchResult(postList);
  }, [postList])

  return (
    <Router>
      <Header />
      <Nav 
      searchValue={searchValue} setSearchValue={setSearchValue} 
      setSearchResult={setSearchResult} postList={postList}/>

      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home postList={searchResult} isLoading={isLoading} isFail={isFail} />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App










































// <header>
//   <button onClick={() => { setType("users") }}>Users</button>
//   <button onClick={() => { setType("posts") }}>Posts</button>
//   <button onClick={() => { setType("comments") }}>Comments</button>
// </header>
// <main>

//   <DisplayData data={data} />
// </main>


// Use state hook
// const [data, setData] = useState([]);
// const [type, setType] = useState("users");

// // Use effect hook
// useEffect(() => {
//   const fetchData = async () => {
//     const request = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }

//     const response = await apiRequest(`${API_URL}/${type}`, request);
//     setData(response)
//   }

//   fetchData();
// }, [type])
