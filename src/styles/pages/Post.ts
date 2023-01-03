import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
    margin-block: ${theme.spaces[20]};
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    height: 200px;
    width: 100%;
    background-color: ${theme.colors.black};

    @media (min-width: 925px) {
      height: 400px;
    }
  `}
`;

export const Infos = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spaces[6]};
    margin-top: ${theme.spaces[6]};
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

export const Text = styled.div`
  ${({ theme }) => css`
    text-align: justify;
    margin-block: ${theme.spaces[2]} ${theme.spaces[6]};
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.normal};
    color: ${theme.colors.text};
    line-height: ${theme.lineHeights.sm};
  `}
`;
