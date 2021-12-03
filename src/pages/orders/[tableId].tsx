import 'react-tabs/style/react-tabs.css';
import Head from "next/head";
import HeaderOrders from '../../components/HeaderOrders';
import { Container, STab, STabs, STabList, STabPanel} from '../../styles/pages/orders';
import BottomTab from '../../components/BottomTab';
import MyOrders from '../../components/MyOrders';
import { GetStaticProps, GetStaticPaths } from 'next';
import api from '../../services/api';

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

type OrdersProps = {
  orders: Order[];
}

const Orders: React.FC<OrdersProps> = ({ orders }) => {
  return(
    <>
    <Head>
        <title>{ "Pedidos" }</title>
    </Head>
    <HeaderOrders />
    <Container>

      <STabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName='is-selected'
      >
        <STabList>
          <STab>Pendentes</STab>
          <STab>Finalizados</STab>
        </STabList>

        <STabPanel>
          {orders.map(order => {
            if(!order.finished) {
              return (
                <MyOrders key={order.id} imgName={order.product.img} itemName={order.product.name} isFinished={false} />
              );
            }
          })}
        </STabPanel>
        <STabPanel>
          {orders.map(order => {
            if(order.finished) {
              return (
                <MyOrders key={order.id} imgName={order.product.img} itemName={order.product.name} isFinished={true} />
              );
            }
          })}
        </STabPanel>
      </STabs>
    </Container>
    <BottomTab />
    </>
  );
}

export default Orders;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { tableId } = ctx.params;

  const { data } = await api.get(`/ordersByTable/${tableId}`);

  const orders = data.map(order => {
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


  return {
    props: {
      orders,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('orders');

  const paths = data.map(order => {
    return {
      params: {
        tableId: order.id.toString(),
      }
    }
  });

  return {
    paths, // posso passar como [] para o next não gerar na build a página estática de nenhum episódio, ou posso passar aqui alguns episódios para gerar de forma estática, o restante pode ser carregado a partir de quando os usuários forem acessando
    fallback: 'blocking', // false: só posso acessar as páginas que foram geradas de forma estática na build, true: next faz uma requisição no browser do usuário para carregar os dados do episódio, 'blocking': next faz a requisição utilizando o server node dele
  }
}
