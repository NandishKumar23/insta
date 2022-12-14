import Image from 'next/image'
import React from 'react'
import { SearchIcon,
       PlusCircleIcon,
    UserGroupIcon,
HeartIcon,
PaperAirplaneIcon,
MenuIcon, 
} from '@heroicons/react/outline'
import {HomeIcon} from '@heroicons/react/solid'
import { signIn, useSession,signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import {modalState} from "../atoms/modalAtom"

const Header = () => {
   const {data:session}=useSession();
   const[open,setOpen]=useRecoilState(modalState)
   const router=useRouter()
  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
    <div className='flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto'>

    <div onClick={()=> router.push('/')} className='relative hidden lg:inline-grid w-24 cursor-pointer'>

    <Image 
    src="https://links.papareact.com/ocw" 
    layout='fill'
    objectFit='contain'
/>

    </div>
    <div onClick={()=> router.push('/')}
    className='relative w-10  lg:hidden flex-shrink-0 cursor-pointer'>
    <Image 
    src="https://links.papareact.com/jjm" 
    layout='fill'
    objectFit='contain'
/>

    </div>
    <div className='max-w-xs'>
    <div className='relative -mt-1 p-3 rounded-md bg-black-500'>
    <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none '>
        <SearchIcon className='h-5 w-5 text-gray-500'/>
    </div>
        <input  className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black' type="text"  placeholder='Search'></input>
    </div>
    </div>
    <div className='flex items-center justify-end space-x-4'>
    <HomeIcon onClick={()=> router.push('/')} className='navBtn'/>
    <MenuIcon className='h-10 w-10 md:hidden cursor-pointer'/> 
     
     {session ? (
      <>
      <div className='relative navBtn'>
     <PaperAirplaneIcon className='navBtn rotate-45'/> 
     <div className='absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>
      1
     </div> 
     </div>
    
    <PlusCircleIcon onClick={()=>setOpen(true)} className='navBtn'/>
    <UserGroupIcon className='navBtn'/>
    <HeartIcon className='navBtn' />
    <img 
    onClick={signOut}
    src={session?.user?.image}
    className='w-10 h-10 rounded-full object-center cursor-pointer'/>
    </>
     ):(
     <button onClick={signIn}>Sign In</button>
     )}
     
    </div>
    
  </div>
</div>
  )
}

export default Header

