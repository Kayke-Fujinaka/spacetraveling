import { ReactNode } from 'react';
import { Title } from './styles';

export interface IHeadingProps {
  size?: 'lg' | 'xl' | 'xl2';
  letterSpacing?: boolean;
  lineHeight?: 'sm' | 'lg' | 'xl2';
  children: ReactNode;
}

export function Heading({
  size = 'lg',
  letterSpacing = false,
  lineHeight = 'sm',
  children,
}: IHeadingProps) {
  return (
    <Title size={size} letterSpacing={letterSpacing} lineHeight={lineHeight}>
      {children}
    </Title>
  );
}
