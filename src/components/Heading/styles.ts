import styled, { css } from 'styled-components';
import { IHeadingProps } from '.';
import theme from '../../styles/theme';

const headingSizes = {
  lg: theme.fontSizes.lg,
  xl: theme.fontSizes.xl,
  xl2: theme.fontSizes.xl2,
};

const headingLineHeights = {
  sm: theme.lineHeights.sm,
  lg: theme.lineHeights.lg,
  xl2: theme.lineHeights.xl2,
};

export const Title = styled.h1<IHeadingProps>`
  ${({ theme, size, letterSpacing, lineHeight }) => css`
    font-size: ${headingSizes[size]};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${headingLineHeights[lineHeight]};
    color: ${theme.colors.heading};

    ${letterSpacing &&
    css`
      letter-spacing: -0.5px;
    `}
  `}
`;
