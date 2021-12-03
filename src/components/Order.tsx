import { Container } from "../styles/components/Order";
import Image from 'next/image';

interface OrderProps {
  imgName: string;
  itemName: string;
  tableName: string;
}

const Order: React.FC<OrderProps> = ({ imgName, itemName, tableName }) => {
  return(
    <Container>
      <Image src={`/${imgName}.png`}  alt={`${itemName}`} width="100" height="100"/>
      <h3>{`${itemName}`}</h3>
      <h3>{`${tableName}`}</h3>
    </Container>
  );
}

export default Order;