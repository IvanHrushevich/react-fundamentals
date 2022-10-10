import { useState, useEffect } from "react";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";

import "./styles/App.css";
import axios from "axios";
import PostService from "./API/PostService";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (post) => {
    setPosts([...posts, post]);
    setModal(false);
  };

  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  async function fetchPosts() {
    const posts = await PostService.getAll();
    setPosts(posts);
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)} style={{ marginTop: 30 }}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

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
