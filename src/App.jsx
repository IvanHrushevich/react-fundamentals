import { useState, useEffect } from "react";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import Loader from "./components/UI/loader/Loader";
import PostService from "./API/PostService";
import { usePosts } from "./hooks/usePosts";
import { useFetching } from "./hooks/useFetching";

import { getPageCount } from "./utils/pages";

import "./styles/App.css";
import Pagination from "./components/UI/pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);

      const totalPostCount = response.headers["x-total-count"];
      const totalPages = getPageCount(totalPostCount, limit);
      setTotalPages(totalPages);
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const createPost = (post) => {
    setPosts([...posts, post]);
    setModal(false);
  };

  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)} style={{ marginTop: 30 }}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Error: {postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          posts={sortedAndSearchedPosts}
          title="Post List"
          remove={removePost}
        />
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        changePage={changePage}
      />
    </div>
  );
}

export default App;
