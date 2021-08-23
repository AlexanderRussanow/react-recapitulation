import React from 'react'
import PostItem from './PostItem'

const PostsList = ({posts, postTitle, removePost}) => {
   
   return (
      <div>
         <h1 style={{textAlign: 'center', marginTop: '15px'}}>{postTitle}</h1>
        {posts.map((p, index) => <PostItem removePost={removePost} key={`${p.id}_${p.title}`} number={index + 1} id={p.id} title={p.title} content={p.content} />)}
      </div>

   )
}

export default PostsList