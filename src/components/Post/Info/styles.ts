import styled, { css } from 'styled-components';

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    gap: ${theme.spaces[2]};
    color: ${theme.colors.info};
  `}
`;
