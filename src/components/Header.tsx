import { Container } from "../styles/components/Header";
import Image from 'next/image';

interface HeaderProps {
  title: string;
  img: string;
}


const Header: React.FC<HeaderProps> = ({ title, img }) => {
  return(
    <Container>
      <Image src={`/${img}.png`} alt={title} width="120" height="120"/>
      <h1>{title}</h1>
    </Container>
  );
}

export default Header;