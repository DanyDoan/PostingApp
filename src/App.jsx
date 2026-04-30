import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header.jsx";
import Nav from "./Nav.jsx"
import Footer from "./Footer.jsx";

import Home from "./pages/Home.jsx";
import Post from "./pages/Post.jsx";
import About from "./pages/About.jsx"

import "./assets/App.css";
function App() {

  // API url
  const API_URL = "https://jsonplaceholder.typicode.com"


  return (
    <Router>
      <Header />
      <Nav />

      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
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
