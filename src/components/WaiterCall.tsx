import { Container } from "../styles/components/WaiterCall";
import Image from 'next/image';

interface WaiterCallProps {
  tableId: number;
}

const WaiterCall: React.FC<WaiterCallProps> = ({ tableId }) => {
  return(
    <Container>
      <Image src={`/waiter-call.png`}  alt={`Chamada garçom`} width="100" height="100"/>
      <h3>{`Mesa ${tableId} necessita de atendimento.`}</h3>
    </Container>
  );
}

export default WaiterCall;