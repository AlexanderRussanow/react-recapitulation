import React from "react";
import MyButton from "./UI/buttons/MyButton";
import MyInput from "./UI/inputs/MyInput";

const PostForm = ({ createPost }) => {
  const [post, setPost] = React.useState({ titleInput: "", contentInput: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    createPost(newPost);
    setPost({ titleInput: "", contentInput: "" });
  };

  return (
    <form>
      <MyInput
        value={post.titleInput}
        onChange={(e) =>
          setPost({ ...post, titleInput: e.currentTarget.value })
        }
        placeholder="For title..."
      />
      <MyInput
        value={post.contentInput}
        onChange={(e) =>
          setPost({ ...post, contentInput: e.currentTarget.value })
        }
        placeholder="For content..."
      />
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};

export default PostForm;
