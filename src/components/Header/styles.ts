import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    padding-block: ${theme.spaces[10]};
  `}
`;
