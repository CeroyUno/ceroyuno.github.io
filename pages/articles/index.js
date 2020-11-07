import Head from 'next/head';
import MenuComponent from '../../components/menu';

function Articles() {
  return (
    <div className="container">
      <Head>
        <title>ARTICLES | CeroyUno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MenuComponent />
        <h1 className="title">
          ARTICLES | CeroyUno
        </h1>
      </main>
    </div>
  )
}

export default Articles;