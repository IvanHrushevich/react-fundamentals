import { CSSTransition, TransitionGroup } from "react-transition-group";

import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.length ? (
        <TransitionGroup>
          {posts.map((post, index) => (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem post={post} remove={remove} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <h1 style={{ textAlign: "center" }}>No Posts</h1>
      )}
    </div>
  );
};

export default PostList;
