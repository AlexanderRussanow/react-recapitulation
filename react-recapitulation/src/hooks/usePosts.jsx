import React from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPost = React.useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else {
      return posts;
    }
  }, [sort, posts]);
  return sortedPost;
};

export const usePost = (posts, sort, query) => {
  const sortedPost = useSortedPosts(posts, sort);
  const sortAndSearchPosts = React.useMemo(() => {
    return sortedPost.filter((p) => p.title.toLowerCase().includes(query));
  }, [query, sortedPost]);
  return sortAndSearchPosts;
};
