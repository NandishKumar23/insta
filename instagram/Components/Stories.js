import {faker} from "@faker-js/faker"
import { useEffect, useState } from "react"
import Story from "./Story"
import { signIn, useSession,signOut } from 'next-auth/react'

const Stories = () => {
  const {data:session}=useSession();
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
      const suggestions = [...Array(30)].map((_, i) => ({
        id:i,
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
      }));
      
      setSuggestions(suggestions);

    }, []);
  
   
  return (
   <div className="flex space-x-2 p-6 mt-8 bg-white border-gray-200 border rounded-sm overflow-x-scroll  scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} userName={session.user.username}/>
      )}
      {suggestions.map(profile=>(
        <Story key={profile.id} img={profile.avatar}  userName={profile.username}/>
      )
      )}
   </div>
  )
}

export default Stories