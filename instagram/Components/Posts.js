import { collection, onSnapshot, orderBy, query,Timestamp } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"
import { signIn, useSession,signOut } from 'next-auth/react'
import Post from "./Post"


function Posts() {
  const[posts,setPosts]=useState([])
  const {data:session}=useSession();

  useEffect(()=>{
     const unSubscribe= onSnapshot(query(collection(db,'posts'),orderBy('timestamp','desc')),snapshot=>{
         setPosts(snapshot.docs)
      });

      return unSubscribe;
  },[db])
  
  return (
    <div>
    {posts.map((post)=>(
      <Post 
       key={post.id}
       username={post.data().username}
       userImg={session?.user?.image}
       img={post.data().image}
       caption={post.data().caption}
      />

    ))}
    <Post />
    
    </div>
  )
}

export default Posts