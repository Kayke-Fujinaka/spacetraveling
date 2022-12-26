import Image from 'next/image';
import logo from '../../assets/Logo.svg';
import { Container } from './styles';

export default function Header() {
  return (
    <Container className="wrapper">
      <a href="#">
        <Image
          src={logo}
          alt="spacetraveling. logo"
          loading="lazy"
          width={238.62}
          height={25.63}
        />
      </a>
    </Container>
  );
}
