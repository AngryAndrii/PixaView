import { FC, ReactNode } from 'react';
import { StyledLayout } from './Layout.styled';

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};
