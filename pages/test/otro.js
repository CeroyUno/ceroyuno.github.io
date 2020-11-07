import Head from 'next/head';
import React from 'react';
import MenuComponent from '../../components/menu';

export default function Test() {
  return (
    <div className="container">
      <Head>
        <title>OTRO | CeroyUno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MenuComponent />
        <h1 className="title">
          OTRO | CeroyUno
        </h1>
      </main>
    </div>
  )
}
