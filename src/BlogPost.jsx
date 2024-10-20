
import React from 'react';

const BlogPost = ({ title, body, imageUrl }) => (
  <article aria-labelledby={`title-${title}`}>
    <header>
      <h2 id={`title-${title}`}>{title}</h2>
    </header>
    <img src={imageUrl} alt={`Image for ${title}`} />
    <section>
      <p>{body}</p>
    </section>
  </article>
);

export default BlogPost;