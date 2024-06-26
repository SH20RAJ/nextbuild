'use client'
 
import Link from 'next/link'
import useSWR from 'swr'
 
const fetcher = (url) => fetch(url).then((r) => r.json())
 
export default function Page() {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/1`,
    fetcher
  )
  if (error) return 'Failed to load'
  if (!data) return 'Loading...'
 
  return <>
  <Link href={"/"}>Main</Link>
  data.title {data.title}
  
  
  </>
}