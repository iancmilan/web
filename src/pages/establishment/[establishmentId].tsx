import Head from "next/head";
import BottomTab from "../../components/BottomTab";
import Header from '../../components/Header';
import Item from "../../components/Item";
import ScrollableTabs from "../../components/ScrollableTabs";
import Link from 'next/link';

import { Container, Items } from '../../styles/pages/Establishment';
import { useRouter } from 'next/router';
import api from "../../services/api";
import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from 'next';

type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
}

type Establishment = {
  id: string;
  name: string;
  img: string;
  products: Product[];
}

type EstablishmentProps = {
  establishment: Establishment;
  establishmentId: number;
}

const Establishment: React.FC<EstablishmentProps> = ({ establishment, establishmentId }) => {
  const router = useRouter();
  const { table } = router.query;


  if (typeof window !== "undefined" && establishmentId) {
    localStorage.setItem('@cardappio/establishment', establishmentId.toString());
  }

  if (table) {
    localStorage.setItem('@cardappio/table', table.toString());
  }

  return (
    <>
    <Header title={establishment.name} img={establishment.img}/>
    <Container>
      <Head>
        <title>{establishment.name}</title>
      </Head>
      
      <ScrollableTabs />
      
      <Items>
        {establishment.products.map(product => {
          return (
            <Link href={`/product/${product.id}?table=${table}`} key={product.id}>
              <a>
              <Item imgName={`${product.img}`} itemName={`${product.name}`} itemPrice={`${product.price.toLocaleString('pt-BR', { style: "currency", currency: 'BRL', minimumFractionDigits: 2 })}`} />
              </a>
            </Link>
          );
        })}
      </Items>

    </Container>
    <BottomTab />
    </>
  );
}

export default Establishment;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { establishmentId } = ctx.params;

  const { data } = await api.get(`/establishments/${establishmentId}`);

  const establishment = {
    id: data.id,
    name: data.name,
    img: data.img,
    products: data.products,
  }

  return {
    props: {
      establishment,
      establishmentId,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('establishments');

  const paths = data.map(establishment => {
    return {
      params: {
        establishmentId: establishment.id.toString(),
      }
    }
  });

  return {
    paths, // posso passar como [] para o next não gerar na build a página estática de nenhum episódio, ou posso passar aqui alguns episódios para gerar de forma estática, o restante pode ser carregado a partir de quando os usuários forem acessando
    fallback: 'blocking', // false: só posso acessar as páginas que foram geradas de forma estática na build, true: next faz uma requisição no browser do usuário para carregar os dados do episódio, 'blocking': next faz a requisição utilizando o server node dele
  }
}