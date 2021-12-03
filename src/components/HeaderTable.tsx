import { Container } from "../styles/components/HeaderTable";

type HeaderTableProps = {
  tableId: number;
}


const HeaderTable: React.FC<HeaderTableProps> = ({ tableId }) => {
  return(
    <Container>
      <h1>{`Mesa ${tableId}`}</h1>
    </Container>
  );
}

export default HeaderTable;