import Head from 'next/head';
import MenuComponent from '../components/menu';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ABOUT | CeroyUno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MenuComponent />
        <h1 className="title">
          ABOUT | CeroyUno
        </h1>
      </main>
    </div>
  )
}
