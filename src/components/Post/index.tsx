import Link from 'next/link';
import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import Info from './Info';
import { Infos, Subtitle, Title } from './styles';

interface IPost {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface IPostProps {
  post: IPost;
}

interface IInfos {
  id: string;
  content: string;
  icon: JSX.Element;
}

export default function Post({ post }: IPostProps) {
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
  ];

  return (
    <Link href={`/post/${post.uid}`} key={post.uid}>
      <article>
        <Title>{post.data.title}</Title>
        <Subtitle>{post.data.subtitle}</Subtitle>
        <Infos>
          {infos.map((info, idx) => (
            <Info key={idx} infos={info} />
          ))}
        </Infos>
      </article>
    </Link>
  );
}
