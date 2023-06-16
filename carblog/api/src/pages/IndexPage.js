import React, { useContext, useEffect, useState } from 'react'
import Post from '../Post'
import { UserContext } from '../UserContext';

export default function IndexPage() {
  const [posts, setPost] = useState([])
  const { userInfo } = useContext(UserContext);
  // console.log(userInfo)
  useEffect(()=>{
    fetch(`http://localhost:4000/post`).then(res => {
      res.json().then(posts=>{
        
        setPost(posts)
      })
    })
  },[])
  return (
    <div>
        {posts.length > 0 && posts.map((post,key) => (
          <Post key={posts.id} {...post} />
        ))}
    </div>
  )
}
