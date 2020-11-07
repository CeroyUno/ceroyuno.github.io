import { useRouter } from 'next/router';
import Head from 'next/head';
import MenuComponent from '../../components/menu';

export default function Article() {

  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="container">
      <Head>
        <title>NEWS A | CeroyUno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MenuComponent />
        <h1 className="title">
          NEWS A | CeroyUno
        </h1>
        <div>
          SLUG { slug }
        </div>
      </main>
    </div>
  )
}