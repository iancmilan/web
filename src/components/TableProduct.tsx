import { Container } from '../styles/components/TableProduct';
import Image from 'next/image';

interface TableProductProps {
  imgName: string;
  itemName: string;
  itemPrice: string;
}

const TableProduct: React.FC<TableProductProps> = ({ imgName, itemName, itemPrice }) => {
  return (
    <Container>
      <Image src={`/${imgName}.png`} alt={`${itemName}`} width="70" height="70"/>
      <h2>{`${itemName}`}</h2>
      <span> </span>
      <h3>{`${itemPrice}`}</h3>
    </Container>
  );
}

export default TableProduct;