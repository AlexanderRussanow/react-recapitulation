import React from "react";
import MyButton from "./UI/buttons/MyButton";

const PostItem = ({id, title, content, number, removePost }) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{number}.  {title}</strong>
        <div>{content}</div>
      </div>
      <div className="post_btn">
        <MyButton onClick={() => removePost(id)}>Del post</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
