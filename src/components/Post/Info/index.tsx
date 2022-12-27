import * as S from './styles';

interface IInfos {
  id: string;
  content: string;
  icon: JSX.Element;
}

export default function Info({ id, icon, content }: IInfos) {
  return (
    <S.Info key={id}>
      {icon}
      <p>{content}</p>
    </S.Info>
  );
}
