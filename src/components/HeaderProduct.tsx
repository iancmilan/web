import { Container } from "../styles/components/HeaderProduct";
import Image from 'next/image';

type HeaderProductProps = {
  img: string;
  name: string;
}


const HeaderProduct: React.FC<HeaderProductProps> = ({ img, name }) => {
  return(
    <Container>
      <Image src={`/${img}.png`} alt={`${name}`} width="150" height="150"/>
    </Container>
  );
}

export default HeaderProduct;