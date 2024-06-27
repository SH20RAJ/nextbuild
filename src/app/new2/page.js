'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (
    <>
      <Link href="/">Main</Link>
      <br />
      <div>Data Title: {data.title}</div>
    </>
  );
}