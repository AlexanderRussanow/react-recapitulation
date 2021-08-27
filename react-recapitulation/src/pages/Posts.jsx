import React from "react";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import { useFetching } from "../hooks/useFetching";
import { usePost } from "../hooks/usePosts";
import { setPageCount } from "../utils/pages";
import MyButton from "../components/UI/buttons/MyButton";
import MyModal from "../components/UI/myModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostsList from "../components/PostsList";

function Posts() {
  const [posts, setPosts] = React.useState([]);
  const [visible, setVisible] = React.useState(false);
  const [postTotalPages, setTotalPages] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [filter, setFilter] = React.useState({ sort: "", query: "" });
  const sortAndSearchPosts = usePost(posts, filter.sort, filter.query);

  const [fetchPost, isPostLoading, errorPost] = useFetching(async () => {
    const respons = await PostService.getAll(limit, page);
    setPosts([...posts, respons.data]);
    const totalCount = respons.headers["x-total-count"];
    setTotalPages(setPageCount(totalCount, limit));
  });

  React.useEffect(async () => {
    fetchPost();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };

  const removePost = (delPost) =>
    setPosts(posts.filter((p) => p.id !== delPost));

  const changePage = (p) => {
    setPage(p);
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setVisible(true)}>
        Create new
      </MyButton>
      <MyModal visible={visible} setVisible={setVisible}>
        <PostForm createPost={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {errorPost && <h2>Error: ${errorPost}</h2>}
      <PostsList
        posts={sortAndSearchPosts}
        postTitle={"Posts list:"}
        removePost={removePost}
      />
      {isPostLoading && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      )}
      <Pagination
        totalPages={postTotalPages}
        page={page}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;
