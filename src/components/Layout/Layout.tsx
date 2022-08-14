import React, { ReactNode } from 'react';
import { Title } from '../common';
import { LayoutWrapper } from './styles';

function Layout({ children }: { children: ReactNode }) {
  return (
    <LayoutWrapper>
      <Title>HEADER</Title>

      {children}
    </LayoutWrapper>
  );
}

export default Layout;
