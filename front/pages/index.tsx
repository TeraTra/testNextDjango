import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { useState } from 'react'

export default function Home({data}: {data: Data[]}) {
  //const [posts, setPosts] = useState(data);

  const onDelete = async(id)=>{
    await axios.delete(`http://localhost:8000/deleteData/${id}`)
  }

  return (
    <div>
      <Header/>
      <section>
      {data.map((post)=>(
        <ul key={post.id}>
          <li>{post.title}</li>
          <li>{post.details}</li>
          <button onClick={()=>onDelete(post.id)}>Delete</button>
        </ul>
      ))}
      </section>
    </div>
  )
}

type Data={
  id:number
  title: string
  details: string
}

export const getServerSideProps: GetServerSideProps = async () =>{
  const res = await fetch("http://localhost:8000/listdata")
  const data: Data[] = await res.json()
  return{props: {data}}
}
