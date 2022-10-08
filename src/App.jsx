import { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Ruby", body: "Description" },
    { id: 3, title: "C#", body: "Description" },
    { id: 4, title: "C++", body: "Description" },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = () => {
    const newPost = { id: Date.now(), title, body };
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
  };

  return (
    <div className="App">
      <form>
        <MyInput
          type="text"
          placeholder="Post name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <MyInput
          type="text"
          placeholder="Post body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <MyButton onClick={addNewPost} type="button">
          Create Post
        </MyButton>
      </form>
      <PostList posts={posts} title="Post List" />
    </div>
  );
}

export default App;
