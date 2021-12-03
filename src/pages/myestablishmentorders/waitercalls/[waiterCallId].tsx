import { Container, WaiterCallStatusButton } from "../../../styles/pages/WaiterCallDetails";
import HeaderClean from '../../../components/HeaderClean';
import { GetStaticPaths, GetStaticProps } from "next";
import api from "../../../services/api";
import Image from 'next/image';
import { useRouter } from "next/router";

type WaiterCall = {
  id: number;
  finished: boolean;
  table_id: number;
  establishment_id: number;
}

type WaiterCallDetailsProps = {
  waitercall: WaiterCall;
}


const WaiterCallDetails: React.FC<WaiterCallDetailsProps>= ({ waitercall }) => {
  const router = useRouter();

  function handleOrderFinished(waitercallId: number) {
    api.put(`waitercalls/${waitercallId}`);
    router.push(`/myestablishmentorders/1`);
  }

  return (
    <>
      <HeaderClean title={`Chamada ao garçom`} />
      <Container>
        <Image src={`/waiter-call.png`} alt={'Chamando garçom'} width="120" height="120"/>
        <h3>{`Mesa ${waitercall.table_id} necessita de atendimento.`}</h3>
      </Container>
      <WaiterCallStatusButton>
        <button type="button" onClick={() => handleOrderFinished(waitercall.id)}>
          Mesa atendida
        </button>
      </WaiterCallStatusButton>
    </>
  );
}

export default WaiterCallDetails;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { waiterCallId } = ctx.params;

  const { data } = await api.get(`/waitercalls/${waiterCallId}`);

  const waitercall = {
    id: data.id,
    finished: data.finished,
    table_id: data.table_id,
    establishment_id: data.establishment_id,
  }

  return {
    props: {
      waitercall,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('waitercalls');

  const paths = data.map(waitercall => {
    return {
      params: {
        waiterCallId: waitercall.id.toString(),
      }
    }
  });

  return {
    paths, // posso passar como [] para o next não gerar na build a página estática de nenhum episódio, ou posso passar aqui alguns episódios para gerar de forma estática, o restante pode ser carregado a partir de quando os usuários forem acessando
    fallback: 'blocking', // false: só posso acessar as páginas que foram geradas de forma estática na build, true: next faz uma requisição no browser do usuário para carregar os dados do episódio, 'blocking': next faz a requisição utilizando o server node dele
  }
}