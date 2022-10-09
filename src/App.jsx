import { useMemo, useState } from "react";

import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Ruby", body: "Some description" },
    { id: 3, title: "C#", body: "Description" },
    { id: 4, title: "C++", body: "Dummy Description" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = useMemo(() => {
    return selectedSort
      ? [...posts].sort((a, b) =>
          a[selectedSort].localeCompare(b[selectedSort])
        )
      : posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  const createPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);

    setPosts(sortedPosts);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <MyInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      <MySelect
        options={[
          { value: "title", name: "By name" },
          { value: "body", name: "By body" },
        ]}
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Sort by"
      />
      <PostList
        posts={sortedAndSearchedPosts}
        title="Post List"
        remove={removePost}
      />
    </div>
  );
}

export default App;
