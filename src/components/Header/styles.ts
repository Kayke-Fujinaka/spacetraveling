import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    padding-block: ${theme.spaces[10]};
    width: min(60rem, 100%);
    margin-inline: auto;
    padding-inline: 2rem;

    @media (min-width: 925px) {
      width: min(59rem, 100%);
      padding-inline: 2.4rem;
    }
  `}
`;
