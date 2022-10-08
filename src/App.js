import { useState } from "react";
import PostItem from "./components/PostItem";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Ruby", body: "Description" },
    { id: 3, title: "C#", body: "Description" },
  ]);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Post List</h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default App;
