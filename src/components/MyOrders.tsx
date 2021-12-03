import { Container, Circle } from "../styles/components/MyOrders";
import Image from 'next/image';

interface MyOrderProps {
  imgName: string;
  itemName: string;
  isFinished: boolean;
}

const MyOrders: React.FC<MyOrderProps> = ({ imgName, itemName, isFinished }) => {
  return(
    <Container>
      <Image src={`/${imgName}.png`} alt={`${itemName}`} width="70" height="70"/>
      <h2>{`${itemName}`}</h2>
      <Circle isFinished={isFinished}/>
    </Container>
  );
}

export default MyOrders;