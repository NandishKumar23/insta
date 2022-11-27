import  { useEffect,useState } from 'react'
import {faker} from "@faker-js/faker"

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(6)].map((_, i) => ({
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
    <div>
    <div className='flex justify-between text-sm mb-5 ml-5 mt-4'>
      <h3 className='text-sm font-bold text-gray-400'>People you may know</h3>
      <button className='text-gray-600 font-semibold'>See All</button>
    </div>
    {
      suggestions.map(profile=>(
    <div key={profile.id}
    className="flex items-center justify-between mt-3 ml-5 "
    >
    <img className='h-10 w-10 rounded-full border p-{2px}' src={profile.avatar} alt="none"/>
    <div className='flex-1 ml-4'>
    <h2 className='text-sm font-semibold'> {profile.username}</h2>
    
    </div>

    <button className='text-blue-500'>Follow</button>
    </div>
      ))
    }
    </div>
  )
}

export default Suggestions