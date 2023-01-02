import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
    margin-block: ${theme.spaces[20]};
  `}
`;

export const Infos = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spaces[6]};
  `}
`;

export const Article = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spaces[10]};
    margin-top: ${theme.spaces[16]};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    text-align: justify;
    margin-block: ${theme.spaces[2]} ${theme.spaces[6]};
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.normal};
    color: ${theme.colors.text};
    line-height: ${theme.lineHeights.sm};
  `}
`;
