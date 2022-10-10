import { useParams } from "react-router-dom";

function Post() {
  const params = useParams();
  return <div>Post {params.id} page</div>;
}

export default Post;
