import { Container } from "../styles/components/HeaderClean";
import Image from 'next/image';

type HeaderCleanProps = {
  title: string;
}


const HeaderClean: React.FC<HeaderCleanProps> = ({ title }) => {
  return(
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}

export default HeaderClean;