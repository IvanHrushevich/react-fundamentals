import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.length ? (
        posts.map((post, index) => (
          <PostItem
            post={post}
            key={post.id}
            number={index + 1}
            remove={remove}
          />
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>No Posts</h1>
      )}
    </div>
  );
};

export default PostList;
