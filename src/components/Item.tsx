import { Container } from "../styles/components/Item";
import Image from 'next/image';

interface ItemProps {
  imgName: string;
  itemName: string;
  itemPrice: string;
}

const Item: React.FC<ItemProps> = ({ imgName, itemName, itemPrice }) => {
  return(
    <Container>
      <Image src={`/${imgName}.png`}  alt={`${itemName}`} width="100" height="100"/>
      <h3>{`${itemName}`}</h3>
      <span>{`${itemPrice}`}</span>
    </Container>
  );
}

export default Item;