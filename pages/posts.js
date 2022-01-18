import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import Document from './document'
import { useRouter } from 'next/router'
import { template } from '../helpers/template'

const AllPosts = ({data}) => {

  const router = useRouter();
  console.log(router.query)

  return (
    <div className='dark:bg-slate-900 transition-all'>
      <Document/>
      <Navbar />
      <div className='text-center my-32'>
        <h3 className='text-2xl font-bold dark:text-slate-100 transition-all'>Here are all the Posts! 👇</h3>
      </div>
      <div className="flex flex-wrap -m-4 lg:w-10/12 w-11/12 mx-auto mt-10">
      {data.map((post) => {
        return (
      <Card 
        title = {post.title}
        body = {post.body}
        id = {post.id}
        userId = {post.userId}
      />
        )
      })}
      </div>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context){
  try{
    const {templateString} = template
    const { query } = context;
    const { UserId } = query;
    const res = await fetch(`${templateString}/api/data`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: UserId,
      }),

    });
    const data = await res.json();
    return {
      props : {data : data}
    }
  }catch{
    return {
      notFound : true
    }
  }
}

export default AllPosts

