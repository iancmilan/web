import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    color: #20B25D;
    background: transparent;
    padding: 0.25em 1em;
    border: 2px solid #20B25D;
    border-radius: 10px;
    outline: none;
    margin-top: 1rem;
    width: 11rem;
    height: 12rem;

    transition: color 0.2s, border 0.2s;

    &:hover {
        color: ${shade(0.1, '#20B25D')};
        border: 2px solid ${shade(0.1, '#20B25D')};
    }

    &:focus {
        box-shadow: 0 0 0 1px ${shade(0.1, '#20B25D')};
    }
`;