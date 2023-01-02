import { GetStaticProps } from 'next';
import { useState } from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import { getPrismicClient } from '../services/prismic';
import { Main, SeeMore } from '../styles/pages/Home';
import { formattedDate } from '../utils/dateFormat';

interface IPost {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: IPost[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  const formattedPost = postsPagination.results.map((post: IPost) => {
    return {
      ...post,
      first_publication_date: formattedDate(post.first_publication_date),
    };
  });

  const [posts, setPosts] = useState<IPost[]>(formattedPost);
  const [nextPage, setNextPage] = useState(postsPagination.next_page);
  const [currentPage, setCurrentPage] = useState(1);

  async function handleNextPage(): Promise<void> {
    if (currentPage !== 1 && nextPage === null) return;

    const postsResults = await fetch(`${nextPage}`).then(response =>
      response.json()
    );

    setNextPage(postsResults.next_page);
    setCurrentPage(postsResults.page);

    const newPosts = postsResults.results.map((post: IPost) => {
      return {
        uid: post.uid,
        first_publication_date: formattedDate(post.first_publication_date),
        data: {
          title: post.data.title,
          subtitle: post.data.subtitle,
          author: post.data.author,
        },
      };
    });

    setPosts([...posts, ...newPosts]);
  }

  return (
    <>
      <Header />
      <Main className="wrapper">
        {posts && posts.map(post => <Post key={post.uid} post={post} />)}
        {nextPage && (
          <SeeMore onClick={handleNextPage}>
            <span>Carregar mais posts</span>
          </SeeMore>
        )}
      </Main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const response = await prismic.getByType('post', { pageSize: 1 });

  const posts = response.results.map<IPost>(post => ({
    uid: post.uid,
    first_publication_date: post.first_publication_date,
    data: {
      title: post.data.title,
      subtitle: post.data.subtitle,
      author: post.data.author,
    },
  }));

  const postsPagination = {
    next_page: response.next_page,
    results: posts,
  };

  return { props: { postsPagination }, revalidate: 1800 };
};
