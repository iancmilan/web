import styled from "styled-components";
import { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    z-index: 1;
    position: relative;
    background-color: #fff;
    margin-top: -8rem;
    margin-bottom: 5rem;

    padding: 2rem 2rem;

    h2, h3, h4 {
        color: #20B25D;
    }

    h2 {
        margin-top:5rem;
        margin-bottom: 2rem;
    }

    h3 {
        margin-bottom: 0.5rem;
    }

    h4 {
        font-weight: 400;
        opacity: 50%;
    }
`;

export const Adicionais = styled.div`
    margin-top: 2rem;
    h3 {
        margin-bottom: 2rem;
    }
    
`;

export const LabelAd = styled.label`
    margin-left: 3rem;
    font-weight: 600;
    color: #20B25D;
`;