import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

function Post() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const params = useParams();

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComments, isCommentsLoading, commentsError] = useFetching(
    async (id) => {
      const response = await PostService.getCommentsByPostId(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div>Post {post.id} page</div>
      <p>
        {post.id}. {post.title}
      </p>
      <h1>Comments</h1>
      {isCommentsLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comment) => (
            <div key={comment.id} style={{ marginTop: 15 }}>
              <h5>{comment.email}</h5>
              <div>{comment.body}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Post;
