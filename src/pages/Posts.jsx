import { useEffect, useState, useRef } from "react";

import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

import PostService from "../API/PostService";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/loader/Loader";
import MyModal from "../components/UI/modal/MyModal";
import { useFetching } from "../hooks/useFetching";
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
  const observer = useRef();

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

  useEffect(() => {
    if (isPostsLoading) return;
    if (observer.current) observer.current.disconnect();

    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && page < totalPages) {
        console.log(1);
        setPage(page + 1);
      }
    };

    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isPostsLoading]);

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page]);

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
