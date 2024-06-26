'use client'
 
import Link from 'next/link'
import { useEffect, useState } from 'react'

const fetcher = (url) => fetch(url).then((r) => r.json())
 
export default function Page() {
  const [ data, setData ] = useState({})
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      })

  },[])
 
  return <>
  <Link href={"/"}>Main</Link>
  data.title {data.title}
  
  
  </>
}