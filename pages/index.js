import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import MenuComponent from '../components/menu';
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
        <title>HOME | CeroyUno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MenuComponent />
        <h1 className="title">
          HOME | CeroyUno | Error
        </h1>
        <div>
          { articles && <ArticlesComponent content={articles} /> }
        </div>
      </main>
    </div>
  )
}
