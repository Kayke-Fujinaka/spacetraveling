import { createGlobalStyle, css } from 'styled-components';
import { ITheme } from '../interfaces/styles/theme';

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
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

    .wrapper {
      width: min(58rem, 100%);
      margin-inline: auto;
      padding-inline: 2.4rem;
    }
  `}
`;

export default GlobalStyle;
