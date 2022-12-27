import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.lg};
    color: ${theme.colors.heading};
    letter-spacing: -0.5px;
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    margin-block: ${theme.spaces[2]} ${theme.spaces[6]};
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.normal};
    color: ${theme.colors.text};
    line-height: ${theme.lineHeights.sm};
  `}
`;

export const Infos = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spaces[6]};
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    gap: ${theme.spaces[2]};
    color: ${theme.colors.info};
  `}
`;
