import * as S from './styles';

interface IInfos {
  infos: {
    id: string;
    content: string;
    icon: JSX.Element;
  };
}

export default function Info({ infos }: IInfos) {
  return (
    <S.Info key={infos.id}>
      {infos.icon}
      <p>{infos.content}</p>
    </S.Info>
  );
}
