import Head from "next/head";
import BottomTab from "../../components/BottomTab";
import HeaderTable from "../../components/HeaderTable";
import TableProduct from "../../components/TableProduct";
import { Container, Coupon, Payment, Total } from "../../styles/pages/table";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from "next";
import api from "../../services/api";

type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
  establishment_id: number;
}

type Order = {
  id: number;
  finished: boolean;
  note: string;
  product_id: number;
  table_id: number;
  establishment_id: number;
  product: Product;
}

type Table = {
  id: number,
  name: string;
  description: string;
  orders: Order[];
}

type TableProps = {
  table: Table;
}

const Table: React.FC<TableProps> = ({ table }) => {
  const router = useRouter();
  
  function handlePayment(table: Table) {
    table.orders.map(order => {
      api.delete(`orders/${order.id}`);
    });
    router.push(`/success?id=${table.id}&value=${totalPrice(table)}`);
  }

  function totalPrice(table: Table) {
    if(table) {
      const total = table.orders.map((order) => order.product.price).reduce((total, preco) => total + preco, 0);
      const totalFormatted = total.toLocaleString('pt-BR', { style: "currency", currency: 'BRL', minimumFractionDigits: 2 });
      return totalFormatted;
    }
  }

  return (
    <>
    <Head>
        <title>{ table.name }</title>
    </Head>
    <HeaderTable tableId={table.id}/>
    <Container>
      {table.orders.map(order => {
        return (
          <TableProduct key={`${order.id}`} imgName={`${order.product.img}`} itemName={`${order.product.name}`} itemPrice={`${order.product.price.toLocaleString('pt-BR', { style: "currency", currency: 'BRL', minimumFractionDigits: 2 })}`} />
        );
      })}

      <Payment>
        <h3>Método de pagamento</h3>
        <Image src="/mastercard.png" alt="mastercard" width="40" height="40"></Image>
        <h5>**** **** **** 3095</h5>
        <button type="button" >
          Alterar
        </button>
      </Payment>

      <Coupon>
        <h3>Cupom de desconto</h3>
        <input type="text" />
        <button type="button" >
          Inserir
        </button>
      </Coupon>

      <Total>
        <h2>Total: {totalPrice(table)}</h2>
        <button type="button" onClick={() => handlePayment(table)}>
          Pagar
        </button>
      </Total>
    </Container>
    <BottomTab />
    </>
  );
}

export default Table;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { tableId } = ctx.params;

  const { data } = await api.get(`/tables/${tableId}`);

  const table = {
    id: data.id,
    name: data.name,
    description: data.description,
    orders: data.orders,
  }


  return {
    props: {
      table,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('tables');

  const paths = data.map(table => {
    return {
      params: {
        tableId: table.id.toString(),
      }
    }
  });

  return {
    paths, // posso passar como [] para o next não gerar na build a página estática de nenhum episódio, ou posso passar aqui alguns episódios para gerar de forma estática, o restante pode ser carregado a partir de quando os usuários forem acessando
    fallback: 'blocking', // false: só posso acessar as páginas que foram geradas de forma estática na build, true: next faz uma requisição no browser do usuário para carregar os dados do episódio, 'blocking': next faz a requisição utilizando o server node dele
  }
}