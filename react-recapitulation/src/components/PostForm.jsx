import React from "react";
import MyButton from "./UI/buttons/MyButton";
import MyInput from "./UI/inputs/MyInput";

const PostForm = ({ createPost }) => {
  const [post, setPost] = React.useState({ title: "", content: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    createPost(newPost);
    
    setPost({ title: "", content: "" });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) =>
          setPost({ ...post, title: e.currentTarget.value })
        }
        placeholder="For title..."
      />
      <MyInput
        value={post.content}
        onChange={(e) =>
          setPost({ ...post, content: e.currentTarget.value })
        }
        placeholder="For content..."
      />
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};

export default PostForm;
