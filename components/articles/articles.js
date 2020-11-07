import React from 'react';
import Link from 'next/link';

export default function Articles (props) {

  const [first, ...rest] = props.content;

  return (
    <section>
      <h2>{first && first.title}</h2>
      <ul>
        {
          rest && rest.map(function(article, index){
            return (
            <li key={index}>
              <Link 
                href={{
                  pathname: '/blog/[slug]',
                  query: { slug: `first-new-${index}` },
                }}
              >
                <a>{article.title}</a>
              </Link>
            </li>
            )
          })
        }
      </ul>
    </section>
  );
}
