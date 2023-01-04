import { useRouter } from 'next/router';
import { RichText } from 'prismic-dom';
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineUser,
} from 'react-icons/ai';
import Header from '../../components/Header';
import { Heading } from '../../components/Heading';
import Info from '../../components/Post/Info';
import { getPrismicClient } from '../../services/prismic';
import { Article, Image, Infos, Main, Text } from '../../styles/pages/Post';
import { formattedDate } from '../../utils/dateFormat';
interface Post {
  first_publication_date: string | null;
  uid: string;
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

interface IInfos {
  id: string;
  content: string;
  icon: JSX.Element;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Carregando...</h1>;
  }

  const totalWords = post.data.content.reduce((total, contentItem) => {
    if (!contentItem.heading) return;

    total += contentItem.heading.split('').length;

    const words = contentItem.body.map(item => item.text.split(' ').length);

    words.map(word => (total += word));
    return total;
  }, 0);

  const readTime = Math.ceil(totalWords / 200);

  const infos: IInfos[] = [
    {
      id: post.uid,
      content: post.first_publication_date,
      icon: <AiOutlineCalendar size={20} />,
    },
    {
      id: post.uid,
      content: post.data.author,
      icon: <AiOutlineUser size={20} />,
    },
    {
      id: post.uid,
      content: `${readTime} min`,
      icon: <AiOutlineClockCircle size={20} />,
    },
  ];

  return (
    <>
      <Header />
      <Image src={post.data.banner.url} alt={`${post.data.title} imagem`} />
      <Main className="wrapper">
        <header>
          <Heading size="xl2" lineHeight="xl2">
            {post.data.title}
          </Heading>
          <Infos>
            {infos.map((info, idx) => (
              <Info key={idx} infos={info} />
            ))}
          </Infos>
        </header>
        {post.data.content.map(content => {
          return (
            <Article key={content.heading}>
              <Heading size="xl" letterSpacing lineHeight="sm">
                Proin et varius
              </Heading>
              <Text
                dangerouslySetInnerHTML={{
                  __html: RichText.asHtml(content.body),
                }}
              />
            </Article>
          );
        })}
      </Main>
    </>
  );
}

export const getStaticPaths = async () => {
  const prismic = getPrismicClient({});
  const posts = await prismic.getByType('post');

  const paths = posts.results.map(post => {
    return {
      params: {
        slug: post.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  try {
    const { slug } = params;

    const prismic = getPrismicClient({});
    const response = await prismic.getByUID('post', String(slug), {});

    const post: Post = {
      uid: response.uid,
      first_publication_date: formattedDate(response.first_publication_date),
      data: {
        title: response.data.title,
        author: response.data.author,
        banner: {
          url: response.data.banner.url,
        },
        content: response.data.content,
      },
    };

    return {
      props: { post },
    };
  } catch (err) {
    return { notFound: true };
  }
};
