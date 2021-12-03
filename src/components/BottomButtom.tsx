import { useRouter } from 'next/router';
import { useState } from 'react';
import api from '../services/api';
import { Container } from '../styles/components/BottomButtom';

type BottomButtomProps = {
  product_id: number;
  table_id: number;
  establishment_id: number;
}

const BottomButtom: React.FC<BottomButtomProps> = ({ product_id, establishment_id, table_id }) => {
  const router = useRouter();

  const order = {
    finished: false,
    note: '',
    product_id,
    table_id,
    establishment_id,
  }

  async function createOrder() {
    await api.post('orders', order);
    router.push(`/orders/${table_id}?table=${table_id}`);
  }

  return (
    <Container>
      <button type="button" onClick={createOrder}>
        Realizar pedido
      </button>
    </Container>
  );
}

export default BottomButtom;