import { async } from '@firebase/util';
import { SearchIcon,

  PlusCircleIcon,
UserGroupIcon,
HeartIcon,
PaperAirplaneIcon,
MenuIcon, 
DotsHorizontalIcon,
ChatIcon,
BookmarkIcon,
EmojiHappyIcon
} from '@heroicons/react/outline'
import { HomeIcon}from '@heroicons/react/solid'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { signIn, useSession,signOut } from 'next-auth/react'
import { useEffect, useState } from "react"
import {db,storage}  from "../firebase"

function Post({id,username,userImg,img,caption}) {
  const {data:session}=useSession();


 

    

  return (
    
    <div className='bg-white my-7 border rounded-sm'>
     
     <div className='flex items-center p-5'>
      <img src={userImg} className="rounded-full h-10 w-10 object-contain border p-1 mr-3" alt=""/>
      <p className='flex-1 font-bold'> {username}</p>
      <DotsHorizontalIcon className='h-5'/>
     
     </div>
     
     <img src={img} className="object-cover w-full"></img>
     
     
     {session &&(
      <div className='flex justify-between px-4 pt-4'>
     <div className='flex space-x-4'>
      <HeartIcon className="btn" />
     
     
      <ChatIcon className='btn'/>
      <PaperAirplaneIcon className='btn rotate-45'/>
     </div>
       <BookmarkIcon className='btn'/>
     </div>

     )}
    


     
      <p className='p-5 truncate'> 
      <span className='font-bold mr-1'>
        {username}
      </span>
      {caption}
       </p>
  
    
    </div>
  )
}

export default Post