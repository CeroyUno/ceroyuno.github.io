import Head from 'next/head';
import MenuComponent from '../../components/menu';

export default function News() {

  return (
    <div className="container">
      <Head>
        <title>NEWS | CeroyUno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MenuComponent />
        <h1 className="title">
          NEWS | CeroyUno
        </h1>
        <div>
          EMPTY
        </div>
      </main>
    </div>
  )
}