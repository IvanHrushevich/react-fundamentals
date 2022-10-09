import { useState } from "react";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Ruby", body: "Some escription" },
    { id: 3, title: "C#", body: "Description" },
    { id: 4, title: "C++", body: "Dummy Description" },
  ]);

  const [post, setPost] = useState({ title: "", body: "" });

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (post) => {
    setPosts([...posts, post]);
    setPost({ title: "", body: "" });
  };

  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);

    const sortedPosts = [...posts].sort((a, b) =>
      a[sort].localeCompare(b[sort])
    );
    setPosts(sortedPosts);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <MySelect
        options={[
          { value: "title", name: "By name" },
          { value: "body", name: "By body" },
        ]}
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sort by"
      />
      <PostList posts={posts} title="Post List" remove={removePost} />
    </div>
  );
}

export default App;
