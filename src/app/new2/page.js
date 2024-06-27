'use client'
//this is app/new2/page.js and it will not catch the client side fetch
// It usage react hooks to fetch data
 
import Link from 'next/link'
import { useEffect, useState } from 'react'
 
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
  <br />
  data.title {data.title}
  
  
  </>
}