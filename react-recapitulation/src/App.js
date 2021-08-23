import React from "react";
import PostForm from "./components/PostForm";
import PostsList from "./components/PostsList";
import MyButton from "./components/UI/buttons/MyButton";
import MyInput from "./components/UI/inputs/MyInput";
import './styles/App.css';

function App() {

  const [posts, setPosts] = React.useState([
    { id: 1, title: 'JS', content: 'JS - is a programming language' },
    { id: 2, title: 'TS', content: 'JS - is a programming language, like JS but with strong tipization' },
    { id: 3, title: 'Python', content: 'Python - is a programming language' },
  ])

  const createPost = (newPost) => setPosts([...posts, newPost])

  const removePost = (delPost) => setPosts(posts.filter(p => p.id !== delPost))
  

  return (
    <div className='App'>
      <PostForm createPost={createPost}/>
      { posts.length ? <PostsList posts={posts} postTitle={'Posts list:'} removePost={removePost} /> : <div style={{textAlign: 'center' }}><h2>No post yet....</h2></div> }
      
      {/* <PostsList posts={posts2} postTitle={'Another posts list:'} /> */}
    </div>
  );
}

export default App;
