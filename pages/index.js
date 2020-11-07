import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ArticlesService from '../services/articles';
import ArticlesComponent from '../components/articles/articles';

export default function Home() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Async function for get all social content.
    const fetchData = async () => {
      // Instance service for load all content.
      const result = await ArticlesService();
      // Set into state.
      setArticles(result);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Home | CeroyUno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
        </ul>
        <h1 className="title">
          Home | CeroyUno | UI-KIT
        </h1>
        <div>
          { articles && <ArticlesComponent content={articles} /> }
        </div>
      </main>
    </div>
  )
}
