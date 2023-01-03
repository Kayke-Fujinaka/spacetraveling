import styled, { css } from 'styled-components';

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spaces[2]};
    color: ${theme.colors.info};
  `}
`;
