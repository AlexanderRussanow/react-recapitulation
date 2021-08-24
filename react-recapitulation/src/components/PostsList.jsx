import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostsList = ({ posts, postTitle, removePost }) => {
  if (!posts.length) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>No post yet....</h2>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "15px" }}>{postTitle}</h1>
      <TransitionGroup>
        {posts.map((p, index) => (
          <CSSTransition key={`${p.id}_${p.title}`} timeout={500} classNames='post'>
            <PostItem
              removePost={removePost}
              number={index + 1}
              id={p.id}
              title={p.title}
              content={p.content}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostsList;
