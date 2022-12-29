import { GetStaticPaths, GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post(response, posts): JSX.Element {
  console.log('response', response);
  console.log('posts', posts);
  return (
    <div>
      <h1>Post</h1>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient({});
  const pages = await prismic.getAllByType('post');

  return {
    paths: pages.map(page => page.uid),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient({});
  const response = await prismic.getByUID('post', 'como-utilizar-hooks');

  return {
    props: response,
  };
};
