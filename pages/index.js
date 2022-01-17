import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import Document from './document'
import { template } from '../helpers/template'

const Index = ({data}) => {
  
  const Top10Post = data.slice(0,10)
  return (
    <div className='flex flex-col min-h-screen'>
      <Document/>
      <Navbar />
      <div className='text-center my-32'>
        <h1 className='text-3xl font-semibold my-10'>🔥 This is a Simple App that gets Data from JSON Proxy Holder and Displays it. 🔥</h1>
        <h3 className='text-2xl font-bold'>Here is Top 10 Posts! 👇</h3>
      </div>
      <div className="flex flex-wrap -m-4 lg:w-10/12 w-11/12 mx-auto mt-10">
      {Top10Post.map((post) => {
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

export async function getStaticProps(){
  try{
    const {templateString} = template;
    const res = await fetch(`${templateString}/api/allData`);
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

export default Index

