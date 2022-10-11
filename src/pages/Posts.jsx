import { useEffect, useRef, useState } from "react";

import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

import PostService from "../API/PostService";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/loader/Loader";
import MyModal from "../components/UI/modal/MyModal";
import MySelect from "../components/UI/select/MySelect";
import { useFetching } from "../hooks/useFetching";
import { useObserver } from "../hooks/useObserver";
import { usePosts } from "../hooks/usePosts";
import { getPageCount } from "../utils/pages";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      const newPosts = response.data;
      setPosts([...posts, ...newPosts]);

      const totalPostCount = response.headers["x-total-count"];
      const totalPages = getPageCount(totalPostCount, limit);
      setTotalPages(totalPages);
    }
  );

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (post) => {
    setPosts([...posts, post]);
    setModal(false);
  };

  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="container">
      <MyButton onClick={() => setModal(true)} style={{ marginTop: 30 }}>
        Create Post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Posts per page"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "All" },
        ]}
      />

      {postError && <h1>Error: {postError}</h1>}

      {isPostsLoading && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      )}

      <PostList
        posts={sortedAndSearchedPosts}
        title="Post List"
        remove={removePost}
      />
      <div
        className="dummyElement"
        style={{ height: 30 }}
        ref={lastElement}
      ></div>
    </div>
  );
}

export default Posts;
