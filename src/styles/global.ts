import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        scroll-behavior: smooth;
    }

    body {
        background: ${props => props.theme.colors.primary};
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }
`;