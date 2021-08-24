import React from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import MyButton from "./components/UI/buttons/MyButton";
import MyModal from "./components/UI/myModal/MyModal";
import './styles/App.css';

function App() {

  const [posts, setPosts] = React.useState([
    { id: 1, title: 'JS', content: 'JS - is a programming language' },
    { id: 2, title: 'TS', content: 'TS - is a programming language, like JS but with strong typing' },
    { id: 3, title: 'Python', content: 'Python - is a programming language' },
  ])

  const [visible, setVisible] = React.useState(false)

  const [filter, setFilter] = React.useState({
    sort: '', query: ''
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setVisible(false)
  }

  const removePost = (delPost) => setPosts(posts.filter(p => p.id !== delPost))

  const sortedPost = React.useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } else {
      return posts
    }
  }, [filter.sort, posts])

  const sortAndSearchPosts = React.useMemo(() => {
    return sortedPost.filter(p => p.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPost])

  return (
    <div className='App'>
      <MyButton style={{ marginTop: 30 }} onClick={() => setVisible(true)}>Create new</MyButton>
      <MyModal visible={visible} setVisible={setVisible} ><PostForm createPost={createPost} /></MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostsList posts={sortAndSearchPosts} postTitle={'Posts list:'} removePost={removePost} />
    </div>
  );
}

export default App;
