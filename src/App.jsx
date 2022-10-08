import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Ruby", body: "Description" },
    { id: 3, title: "C#", body: "Description" },
    { id: 4, title: "C++", body: "Description" },
  ]);

  const [post, setPost] = useState({ title: "", body: "" });

  const createPost = (post) => {
    setPosts([...posts, post]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="Post List" />
    </div>
  );
}

export default App;
