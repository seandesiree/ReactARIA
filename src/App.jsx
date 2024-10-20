
import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogPost from './BlogPost';
import CommentForm from './CommentForm';

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <header>
        <h1>{t('title')}</h1>
      </header>
      <BlogPost title="Blog Post 1" body="This is the body of the post" imageUrl="example.com/image.jpg" />
      <CommentForm />
    </div>
  );
}

export default App;