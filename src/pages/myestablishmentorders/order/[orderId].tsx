import { Container, OrderFinishedButton } from "../../../styles/pages/OrderDetails";
import HeaderClean from '../../../components/HeaderClean';
import { GetStaticPaths, GetStaticProps } from "next";
import api from "../../../services/api";
import Image from 'next/image';
import { useRouter } from "next/router";

type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
  establishment_id: number;
}

type Table = {
  id: number;
  name: string;
  description: string;
}

type Order = {
  id: number;
  finished: boolean;
  note: string;
  product_id: number;
  table_id: number;
  establishment_id: number;
  product: Product;
  table: Table;
}

type OrderDetailsProps = {
  order: Order;
}


const OrderDetails: React.FC<OrderDetailsProps>= ({ order }) => {
  const router = useRouter();

  function handleOrderFinished(orderId: number) {
    api.put(`ordersUpdateStatus/${orderId}`);
    router.push(`/myestablishmentorders/${order.establishment_id}`);
  }

  return (
    <>
      <HeaderClean title={`Pedido Nº ${order.id}`} />
      <Container>
        <h2>Detalhes do pedido:</h2>
        <Image src={`/${order.product.img}.png`} alt={order.product.name} width="120" height="120"/>
        <h3>{`${order.product.name}`}</h3>
        <h4>{`${order.product.description}`}</h4>
        <h3>{`${order.note}`}</h3>
        <h2>Detalhes da mesa:</h2>
        <h4>{`${order.table.name}`}</h4>
        <h4>{`Descrição: ${order.table.description}`}</h4>
      </Container>
      <OrderFinishedButton>
        <button type="button" onClick={() => handleOrderFinished(order.id)}>
          Concluir pedido
        </button>
      </OrderFinishedButton>
    </>
  );
}

export default OrderDetails;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { orderId } = ctx.params;

  const { data } = await api.get(`/orders/${orderId}`);

  const order = {
    id: data.id,
    finished: data.finished,
    note: data.note,
    product_id: data.product_id,
    table_id: data.table_id,
    establishment_id: data.establishment_id,
    product: data.product,
    table: data.table,
  }

  return {
    props: {
      order,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('orders');

  const paths = data.map(order => {
    return {
      params: {
        orderId: order.id.toString(),
      }
    }
  });

  return {
    paths, // posso passar como [] para o next não gerar na build a página estática de nenhum episódio, ou posso passar aqui alguns episódios para gerar de forma estática, o restante pode ser carregado a partir de quando os usuários forem acessando
    fallback: 'blocking', // false: só posso acessar as páginas que foram geradas de forma estática na build, true: next faz uma requisição no browser do usuário para carregar os dados do episódio, 'blocking': next faz a requisição utilizando o server node dele
  }
}