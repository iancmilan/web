import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    margin-bottom: 6.5rem;
    justify-content: center;
    align-items: center;
    color: #20B25D;
`;

export const Items = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    
    a {
        text-decoration: none;
    }
`;