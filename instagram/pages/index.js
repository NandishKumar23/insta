import Head from 'next/head'
import Header from "../Components/Header"
import Feed from "../Components/Feed"
import Modal from "../Components/Modal"

export default function Home(){
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide"> 
      <Head>
        <title>Insta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1></h1>
      <Modal/>
      <Header />
      <Feed/>
     
    </div>
   
  )
}


