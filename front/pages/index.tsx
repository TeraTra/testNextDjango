import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import { GetServerSideProps } from 'next'
import axios from 'axios'

export default function Home({data}: {data: Data[]}) {
  return (
    <div>
      <Header/>
      <section>
      {data.map((post)=>(
        <ul key={post.id}>
          <li>{post.title}</li>
          <li>{post.details}</li>
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
