import { useState } from "react";
import PostList from "./components/PostList";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Ruby", body: "Description" },
    { id: 3, title: "C#", body: "Description" },
    { id: 4, title: "C++", body: "Description" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="Post List" />
    </div>
  );
}

export default App;
