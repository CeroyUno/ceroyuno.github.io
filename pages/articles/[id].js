import Head from 'next/head';
import MenuComponent from '../../components/menu';

function Test({ post }) {
  console.log(post);
  return (
    <div className="container">
      <Head>
        <title>OTRO | CeroyUno</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MenuComponent />
        <h1 className="title">
          {post.title} | CeroyUno
        </h1>
      </main>
    </div>
  )
}

// // This function gets called at build time
export async function getStaticPaths() {
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths: [{ params: { id: '1' } }, { params: { id: '2' } }], fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}

export default Test