import React, { PropsWithChildren } from 'react';
import Header from '../Header';
import { LayoutWrapper } from './styles';

interface LayoutProps extends PropsWithChildren {
  title: string;
}

function Layout({ children, title }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Header title={title} />

      {children}
    </LayoutWrapper>
  );
}

export default Layout;
