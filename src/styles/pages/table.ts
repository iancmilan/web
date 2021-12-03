import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  z-index: 1;
  position: relative;
  background-color: #fff;
  margin-top: -8rem;
  margin-bottom: 5rem;
`;

export const Payment = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr;
  grid-template-areas: "texto texto texto texto"
  "imagem cartao cartao botao";
  align-items: center;
  justify-items: flex-start;

  h3 {
    color: #20B25D;
    margin-bottom: 1rem;
    grid-area: texto;
  }

  img {
    object-fit: contain;
    grid-area: imagem;
  }

  h5 {
    grid-area: cartao;
    color: #20B25D;
    opacity: 50%;
  }

  span {
    grid-area: vazio;
  }

  button {
    grid-area: botao;
    height: 3rem;
    width: 8rem;
    color: #fff;
    font-size: 1em;
    font-weight: 700;
    background-color: #20B25D;
    padding: 0.25em 1em;
    border: none;
    border-radius: 10px;
    outline: none;
    justify-self: flex-end;
  }

`;

export const Total = styled.div`
  display: flex;
  padding: 2rem 1rem 1rem 1rem;
  color: #20B25D;
  align-items: center;
  justify-content: space-between;

  button {
    grid-area: botao;
    height: 3rem;
    width: 8rem;
    color: #fff;
    font-size: 1em;
    font-weight: 700;
    background-color: #20B25D;
    padding: 0.25em 1em;
    border: none;
    border-radius: 10px;
    outline: none;
    justify-self: flex-end;
  }
`;

export const Coupon = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr;
  grid-template-areas: "texto texto texto texto"
  "inputt inputt inputt botao";
  align-items: center;
  justify-items: flex-start;

  h3 {
    color: #20B25D;
    margin-bottom: 1rem;
    grid-area: texto;
  }


  input {
    height: 3rem;
    padding: 5px;
    border-radius: 10px;
    /* color: rgba(0,0,0,0.5); */
    border: 1px solid #20B25D;
    outline: 0;
    grid-area: inputt;
  }

  button {
    grid-area: botao;
    height: 3rem;
    width: 8rem;
    color: #fff;
    font-size: 1em;
    font-weight: 700;
    background-color: #20B25D;
    padding: 0.25em 1em;
    border: none;
    border-radius: 10px;
    outline: none;
    justify-self: flex-end;
  }

`;