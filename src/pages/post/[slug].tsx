import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineUser,
} from 'react-icons/ai';
import Header from '../../components/Header';
import { Heading } from '../../components/Heading';
import Info from '../../components/Post/Info';
import { Article, Infos, Main, Text } from '../../styles/pages/Post';

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

export default function Post(response, uid) {
  return (
    <>
      <Header />
      <div className="test-img"></div>
      <Main className="wrapper">
        <header>
          <Heading size="xl2" lineHeight="xl2">
            Criando um “ CRA do zero
          </Heading>
          <Infos>
            <Info
              infos={{
                id: '12',
                content: '15 Mar 2021',
                icon: <AiOutlineCalendar size={20} />,
              }}
            />
            <Info
              infos={{
                id: '112',
                content: 'Joseph',
                icon: <AiOutlineUser size={20} />,
              }}
            />
            <Info
              infos={{
                id: '112',
                content: '4 min',
                icon: <AiOutlineClockCircle size={20} />,
              }}
            />
          </Infos>
        </header>
        <Article>
          <Heading size="xl" letterSpacing={false} lineHeight="sm">
            Proin et varius
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dolor sapien, vulputate eu diam at, condimentum hendrerit tellus.
            Nam facilisis sodales felis, pharetra pharetra lectus auctor sed. Ut
            venenatis mauris vel libero pretium, et pretium ligula faucibus.
            Morbi nibh felis, elementum a posuere et, vulputate et erat. Nam
            venenatis.
          </Text>
        </Article>
        <Article>
          <Heading size="xl" letterSpacing={false} lineHeight="sm">
            Proin et varius
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dolor sapien, vulputate eu diam at, condimentum hendrerit tellus.
            Nam facilisis sodales felis, pharetra pharetra lectus auctor sed. Ut
            venenatis mauris vel libero pretium, et pretium ligula faucibus.
            Morbi nibh felis, elementum a posuere et, vulputate et erat. Nam
            venenatis.
          </Text>
        </Article>
        <Article>
          <Heading size="xl" letterSpacing={false} lineHeight="sm">
            Proin et varius
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dolor sapien, vulputate eu diam at, condimentum hendrerit tellus.
            Nam facilisis sodales felis, pharetra pharetra lectus auctor sed. Ut
            venenatis mauris vel libero pretium, et pretium ligula faucibus.
            Morbi nibh felis, elementum a posuere et, vulputate et erat. Nam
            venenatis.
          </Text>
        </Article>
      </Main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient({});
//   const posts = await prismic.getByType('post');

//   return {
//     props: posts,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const prismic = getPrismicClient({});
//   const response = await prismic.getByUID('post', params.id);

//   return {
//     props: response,
//   };
// };
