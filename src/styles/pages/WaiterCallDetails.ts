import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    z-index: 1;
    position: relative;
    background-color: #fff;
    margin-top: -8rem;
    margin-bottom: 1rem;

    padding: 2rem 2rem;

    h2, h3, h4 {
        color: #20B25D;
    }

    h2 {
        margin-top: 2rem;
        margin-bottom: 0.5rem;
    }

    h3 {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    h4 {
        font-weight: 400;
        opacity: 80%;
    }
`;

export const WaiterCallStatusButton = styled.div`
    background-color: #fff;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 5rem;
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.2);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 5;

    button {
        width: 17rem;
        height: 3.5rem;
        color: #fff;
        font-size: 1em;
        font-weight: 700;
        background-color: #20B25D;
        padding: 0.25em 1em;
        border: none;
        border-radius: 10px;
        outline: none;
    }
`;