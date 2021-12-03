import styled, { css } from 'styled-components';

interface OrderStatusProps {
    isFinished: boolean;
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: "imagem nome nome preco";
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  img {
    grid-area: imagem;
    object-fit: contain;
  }

  h2, h3 {
    color: #20B25D;
  }


  h2 {
    grid-area: nome;
  }

  h3 {
    grid-area: preco;
  }

`;

export const Circle = styled.div<OrderStatusProps>`
    width: 1rem;
    height: 1rem;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    background: #F47C26;
    justify-self: flex-end;

    ${props =>
      props.isFinished &&
      css`
        background: #20B25D;
      `}
`;