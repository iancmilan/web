import BottomButtom from "../../components/BottomButtom";
import { Container, Adicionais, LabelAd } from "../../styles/pages/product";
import HeaderProduct from "../../components/HeaderProduct";
import { ChangeEvent, useState } from "react";
import Checkbox from "../../components/Checkbox";
import { GetStaticProps, GetStaticPaths } from "next";
import api from "../../services/api";
import { useRouter } from "next/router";

type Additional = {
  id: number;
  name: string;
  price: string;
}

type Establishment = {
  id: string;
  name: string;
  img: string;
}

type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  description: string;
  establishment_id: number;
  additionals: Additional[];
  establishment: Establishment;
}

type ProductProps = {
  product: Product;
}

const Product : React.FC<ProductProps> = ({ product }) => {
  const router = useRouter();
  const { table } = router.query;
  const [checked, setChecked] = useState(false);

  
  function handleCheckedChange(event: ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }
  return (
    <>
      <HeaderProduct img={product.img} name={product.name} />
      <Container>
        <h2>{product.price.toLocaleString('pt-BR', {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
        })}</h2>
        <h3>{product.name}</h3>
        <h4>{product.description}</h4>
        <Adicionais>
          <h3>Algum ingrediente adicional?</h3>
          <div>
            {product.additionals.map(additional => {
              return (
                <div key={additional.id}>
                  <Checkbox id={`${additional.id}`} name={`${additional.name}`} checked={checked}  value={`${additional.id}`} onChange={handleCheckedChange} />
                  <LabelAd>{additional.name} + R${Number(additional.price).toLocaleString('pt-BR', { style: "currency", currency: 'BRL', minimumFractionDigits: 2 })}</LabelAd>
                </div>
              );
            })}
          </div>
        </Adicionais>
      </Container>
      <BottomButtom product_id={product.id} table_id={Number(table)} establishment_id={product.establishment_id} />
    </>
  );
}

export default Product;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { productId } = ctx.params;

  const { data } = await api.get(`/products/${productId}`);

  const product = {
    id: data.id,
    name: data.name,
    price: data.price,
    img: data.img,
    description: data.description,
    establishment_id: data.establishment_id,
    additionals: data.additionals,
    establishment: data.establishment,
  }

  return {
    props: {
      product,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('products');

  const paths = data.map(product => {
    return {
      params: {
        productId: product.id.toString(),
      }
    }
  });

  return {
    paths, // posso passar como [] para o next não gerar na build a página estática de nenhum episódio, ou posso passar aqui alguns episódios para gerar de forma estática, o restante pode ser carregado a partir de quando os usuários forem acessando
    fallback: 'blocking', // false: só posso acessar as páginas que foram geradas de forma estática na build, true: next faz uma requisição no browser do usuário para carregar os dados do episódio, 'blocking': next faz a requisição utilizando o server node dele
  }
}