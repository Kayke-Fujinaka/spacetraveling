import { createGlobalStyle, css } from 'styled-components';
import { ITheme } from '../interfaces/styles/theme';

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'DM Sans', sans-serif;
      text-decoration: none;
    }

    body {
      -webkit-font-smoothing: antialiased;
      background-color: ${theme.colors.background};
    }

    body,
    input,
    textarea,
    button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }

    ul {
      list-style: none;
    }
  `}
`;

export default GlobalStyle;