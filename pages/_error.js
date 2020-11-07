import { useRouter } from 'next/router';
import Head from 'next/head';
import MenuComponent from '../components/menu';

export default function Article() {

  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="container">
      <Head>
        <title>ERROR | CeroyUno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MenuComponent />
        <h1 className="title">
          ERROR | CeroyUno
        </h1>
        <div>
          SLUG { JSON.stringify(router) }
        </div>
      </main>
    </div>
  )
}