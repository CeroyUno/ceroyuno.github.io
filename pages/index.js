import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hi from NextJS and Github Pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">
          Hi from NextJS and Github Pages
        </h1>
      </main>
    </div>
  )
}
