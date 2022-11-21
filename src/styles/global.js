import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: ${colors.primary};
        color: ${colors.tertiary};
    }
`