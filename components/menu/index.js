import Link from 'next/link';

export default function Menu() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/articles">
          <a>Articles</a>
        </Link>
      </li>
      <li>
        <Link href="/news">
          <a>News</a>
        </Link>
      </li>
    </ul>
  )
}
