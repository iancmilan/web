import styled from "styled-components";

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

    padding: 1.5rem 1rem;

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

export const Items = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    
    a {
        text-decoration: none;
    }
`;