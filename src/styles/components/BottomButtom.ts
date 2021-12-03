import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
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