import { PropsWithChildren } from 'react';
import { ContainerWrapper } from './styles';

function Container({ children, ...rest }: PropsWithChildren) {
  return <ContainerWrapper {...rest}>{children}</ContainerWrapper>;
}

export default Container;
