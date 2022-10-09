import { useMemo, useState } from "react";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Ruby", body: "Some description" },
    { id: 3, title: "C#", body: "Description" },
    { id: 4, title: "C++", body: "Dummy Description" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    return filter.sort
      ? [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      : posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        posts={sortedAndSearchedPosts}
        title="Post List"
        remove={removePost}
      />
    </div>
  );
}

export default App;
