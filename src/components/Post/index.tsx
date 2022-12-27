import { AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import Info from './Info';
import { Infos, Subtitle, Title } from './styles';

interface IPost {
  id: string;
  date: string | null;
  title: string;
  subtitle: string;
  author: string;
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
      id: post.id,
      content: post.date,
      icon: <AiOutlineCalendar size={20} />,
    },
    {
      id: post.id,
      content: post.author,
      icon: <AiOutlineUser size={20} />,
    },
  ];

  return (
    <article key={post.id}>
      <Title>{post.title}</Title>
      <Subtitle>{post.subtitle}</Subtitle>
      <Infos>
        {infos.map(info => (
          <Info id={info.id} icon={info.icon} content={info.content} />
        ))}
      </Infos>
    </article>
  );
}
