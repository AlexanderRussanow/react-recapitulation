import React from "react";
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import MyButton from "./components/UI/buttons/MyButton";
import Loader from "./components/UI/loader/Loader";
import MyModal from "./components/UI/myModal/MyModal";
import { usePost } from "./hooks/usePosts";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = React.useState([]);
  const [visible, setVisible] = React.useState(false);
  const [filter, setFilter] = React.useState({
    sort: "",
    query: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(async () => {
    fetchingPosts();
  }, []);

  const fetchingPosts = async () => {
    setIsLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setIsLoading(false);
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  };

  const removePost = (delPost) =>
    setPosts(posts.filter((p) => p.id !== delPost));

  const sortAndSearchPosts = usePost(posts, filter.sort, filter.query);

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
      {isLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <PostsList
          posts={sortAndSearchPosts}
          postTitle={"Posts list:"}
          removePost={removePost}
        />
      )}
    </div>
  );
}

export default App;
