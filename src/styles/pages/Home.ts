import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spaces[12]};
  `}
`;

export const SeeMore = styled.button`
  ${({ theme }) => css`
    all: unset;
    width: fit-content;
    cursor: pointer;

    > span {
      font-size: ${theme.fontSizes.md};
      font-weight: ${theme.fontWeights.semibold};
      line-height: ${theme.lineHeights.sm};
      color: ${theme.colors.highlight};
    }
  `}
`;
