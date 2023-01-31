import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import { Navbar } from "./components/navbar/navbar";
import PostList from './components/postlist/postlist';
import posts from "./posts.json";
import Form from './components/form/form';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = post => {
    setPosts([...posts, post]);
  };

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>

        </Routes>
      </Router>
      <h1>Simple CMS System</h1>
      <Form addPost={addPost} />
      <p>Posts:</p>
      <ul>
        {posts.map(post => (
          <li key={post.title}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
  

