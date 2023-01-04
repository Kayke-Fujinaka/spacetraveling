import Image from 'next/image';
import logo from '../../assets/Logo.svg';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <a href="/">
        <Image
          src={logo}
          alt="logo"
          loading="lazy"
          width={238.62}
          height={25.63}
        />
      </a>
    </Container>
  );
}
