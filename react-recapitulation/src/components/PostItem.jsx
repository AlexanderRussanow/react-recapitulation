import React from "react";
import { useHistory } from "react-router-dom";
import MyButton from "./UI/buttons/MyButton";

const PostItem = ({ id, title, content, number, removePost }) => {
  const router = useHistory();

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {title}
        </strong>
        <div>{content}</div>
      </div>
      <div className="post_btn">
        <MyButton onClick={() => router.push(`/posts/${id}`)}>Open</MyButton>
        <MyButton onClick={() => removePost(id)}>Del</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
