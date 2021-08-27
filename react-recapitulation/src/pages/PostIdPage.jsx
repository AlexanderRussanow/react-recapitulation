import React from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const params = useParams();

  const [postBody, setPostBody] = React.useState({});
  const [comments, setComments] = React.useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPostBody(response.data);
  });

  const [fetchCommentsById, isCommLoading, commError] = useFetching(
    async () => {
      const response = await PostService.getCommentById(params.id);
      setComments(response.data);
    }
  );

  React.useEffect(() => {
    fetchPostById();
    fetchCommentsById();
  }, []);

  return (
    <div>
      <h1>You are open post with ID: {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div>
            {postBody.id}: <b>{postBody.title}</b>
          </div>
          <div>{postBody.body}</div>
        </div>
      )}
      {isCommLoading ? (
        <Loader />
      ) : (
        <div style={{ marginTop: 15 }}>
          <h2>Post comments</h2>
          <div>
            {comments.map((c) => (
              <ul key={c.id}>
                <li>
                  <div style={{marginTop: 10}}>
                    <h3>{c.name}</h3>
                    <h4>{c.email}</h4>
                    <p>{c.body}</p>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
