import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    z-index: 1;
    position: relative;
    background-color: #fff;
    margin-top: -8rem;
    padding: 1rem;

    div + div {
      margin-top: 3rem;
    }
`;

export const Card = styled.div`
  color: #20B25D;
  background: transparent;
  border: 1px solid #20B25D;
  border-radius: 10px;
  outline: none;
  height: auto;
  width: 100%;
  margin-top: 1rem;
  padding-bottom: 1rem;

  div {
    background-color: #20B25D;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    h3 {
      color: #fff;
    }
  }

  h4 {
    margin-left: 1rem;
    margin-top: 1rem;
  }

  h4 + h4 {
    margin-top: 0.5rem;
  }

  h6 {
    margin-left: 1rem;
    margin-top: 1rem;
    font-weight: 300;
  }
`;

export const Rate = styled.div`
  color: #20B25D;
  background: transparent;
  /* border: 1px solid #20B25D; */
  border-radius: 10px;
  outline: none;
  height: 12rem;
  width: 100%;
  margin-top: 1rem;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.1);
  height: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;

  div {
    /* border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 1px solid #20B25D; */
    /* height: 3rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    
    h3 {
      color: #20B25D;
    }
  }

  h5 {
    margin-left: 1rem;
    font-weight: 300;
  }

  h5 + h5 {
    margin-top: 0.5rem;
  }

  h6 {
    margin-left: 1rem;
    margin-top: 1rem;
    
  }

  input {
    height: 3rem;
    width: 90%;
    padding: 5px;
    border-radius: 10px;
    background-color: rgba(32, 178, 93, 0.5);
    border: 1px solid #20B25D;
    outline: 0;
    display: block;
    margin-right: auto;
    margin-left: auto;

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #20B25D;
      opacity: 1; /* Firefox */
    }
  }

  button {
    margin-top: 1rem;
    width: 8rem;
    height: 2.5rem;
    color: #fff;
    font-weight: 700;
    background-color: #20B25D;
    padding: 0.25em 1em;
    border: none;
    border-radius: 10px;
    outline: none;
    display: block;
    margin-right: auto;
    margin-left: auto;
    }
`;

export const Stars = styled.section`
  border-bottom: 1px solid #20B25D;
  border-top: 1px solid #20B25D;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;