import Header from "../../Components/Header"
import {getProviders,signIn as SignIntoProvider} from "next-auth/react"

function signin({providers}) {
  return (
    <>
    <Header/>
     <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-2 px-4 text-center">
     <img  className="w-80" src="https://links.papareact.com/ocw"></img>
     <div className="mt-85">
        {Object.values(providers).map((provider) => 
      (
        <div key={provider.name}>
          <button className="p-3 bg-blue-500 text-white rounded-lg" onClick={() => SignIntoProvider(provider.id,{callbackUrl:"/"})}>
            Sign in with {provider.name}
          </button>
        </div>
        ))}
        </div>
       
     </div>
       
     
    </>
  )
}
 export async function getServerSideProps(){
  const providers= await getProviders();

  return {
    props:{
      providers,
    }
  }
 }

export default signin