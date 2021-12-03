import { Container, Card, Rate, Stars } from "../../styles/pages/Success";
import HeaderClean from "../../components/HeaderClean";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

const Success: React.FC = () => {
  const router = useRouter();
  const [orderId, setOrderId] = useState(1);
  const [orderValue, setOrderValue] = useState(1);

  useEffect(() => {
    if(!router.isReady) return;
    const { id, value } = router.query;
    setOrderId(Number(id));
    setOrderValue(Number(value));

  }, [router.isReady]);

  return (
    <>
    <HeaderClean title={'Sucesso!'}  />
    <Container>
      <Card>
        <div>
          <h3>Pagamento confirmado!</h3>
        </div>
        <h4>ID: {orderId}</h4>
        <h4>Valor: {orderValue.toLocaleString('pt-BR', { style: "currency", currency: 'BRL', minimumFractionDigits: 2 })}</h4>
        <h4>Forma de pagamento: Cartão de crédito</h4>
        <h6>* Apresente esse comprovante na saída do estabelecimento.</h6>
      </Card>

      <Rate>
        <div>
          <h3>Cupom de desconto</h3>
        </div>
        <h5>Como você avalia sua experiência no estabelecimento?</h5>
        <Stars>
          <span>☆ ☆ ☆ ☆ ☆</span>
        </Stars>
        <input type="text" placeholder="Deixe aqui seu comentário."/>
        <button type="button" >
          Avaliar
        </button>
        <h6>* Ao avaliar o estabelecimento você ganha um cupom de desconto.</h6>
      </Rate>
    </Container>
  </>
  );
}

export default Success;