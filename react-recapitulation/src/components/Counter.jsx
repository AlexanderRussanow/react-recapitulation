import React from "react";

const Counter = () => {
  const [likeCounter, setLikeCounter] = React.useState(0);
  return (
    <div>
      <h1>{likeCounter}</h1>
      <div>
        <button onClick={() => setLikeCounter(likeCounter + 1)}>+</button>
        <button onClick={() => setLikeCounter(likeCounter - 1)}>-</button>
      </div>
    </div>
  );
};

export default Counter