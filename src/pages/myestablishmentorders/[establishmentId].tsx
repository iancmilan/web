import HeaderClean from "../../components/HeaderClean";
import { Container, Items } from "../../styles/pages/MyEstablishmentOrders";
import Order from '../../components/Order';
import { GetStaticPaths, GetStaticProps } from "next";
import api from "../../services/api";
import Link from "next/link";
import WaiterCall from "../../components/WaiterCall";
import { useEffect, useState } from "react";

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

type WaiterCall = {
  id: number;
  finished: boolean;
  table_id: number;
  establishment_id: number;
}

type MyStablishmentOrdersProps = {
  orders: Order[];
}

const MyEstablishmentOrders: React.FC<MyStablishmentOrdersProps> = ({ orders }) => {

  const [waitercalls, setWaiterCalls] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const { data } = await api.get(`/waitercalls`);
      setWaiterCalls(data);
    }

    fetchApi();
  }, []);
return (
  <>
    <HeaderClean title={'Pedidos/Notificações'}/>
    <Container>
      <Items>
        {orders.map(order => {
          if (!order.finished) {
            return (
              <Link href={`order/${order.id}`} key={order.id}>
                <a>
                  <Order key={order.id} imgName={`${order.product.img}`} itemName={`${order.product.name}`} tableName={`${order.table.name}`} />
                </a>
              </Link>
            );
          }
        })}
      </Items>
      <Items>
        {waitercalls.map(waitercall => {
          if (!waitercall.finished) {
            return (
              <Link href={`waitercalls/${waitercall.id}`} key={waitercall.id}>
                <a>
                  <WaiterCall key={waitercall.id} tableId={waitercall.table_id}/>
                </a>
            </Link>
            );
          }
        })}
      </Items>
    </Container>
  </>
);
}

export default MyEstablishmentOrders;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { establishmentId } = ctx.params;

  const { data: data1 } = await api.get(`/ordersByEstablishment/${establishmentId}`);
  // const { data: data2 } = await api.get(`/waitercalls/`);

  const orders = data1.map(order => {
    return {
      id: order.id,
      finished: order.finished,
      note: order.note,
      product_id: order.product_id,
      table_id: order.table_id,
      establishment_id: order.establishment_id,
      product: order.product,
      table: order.table,
    }
  });

  // const waitercalls = data2.map(waitercall => {
  //   return {
  //     id: waitercall.id,
  //     finished: waitercall.finished,
  //     table_id: waitercall.table_id,
  //     establishment_id: waitercall.establishment_id,
  //   }
  // })

  return {
    props: {
      orders,
      // waitercalls,
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
        establishmentId: order.establishment_id.toString(),
      }
    }
  });

  return {
    paths, // posso passar como [] para o next não gerar na build a página estática de nenhum episódio, ou posso passar aqui alguns episódios para gerar de forma estática, o restante pode ser carregado a partir de quando os usuários forem acessando
    fallback: 'blocking', // false: só posso acessar as páginas que foram geradas de forma estática na build, true: next faz uma requisição no browser do usuário para carregar os dados do episódio, 'blocking': next faz a requisição utilizando o server node dele
  }
}