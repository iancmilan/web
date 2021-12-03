import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: "imagem nome vazio preco";
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

  span {
    grid-area: vazio;
  }

  h2 {
    grid-area: nome;
  }

  h3 {
    grid-area: preco;
  }

`;