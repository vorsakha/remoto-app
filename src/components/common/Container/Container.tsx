import { ScrollViewProps, ViewProps } from 'react-native';
import { ContainerScrollView, ContainerView } from './styles';

type ContainerProps = {
  scroll?: boolean;
  absolute?: boolean;
} & (ViewProps | ScrollViewProps);

function Container({ children, scroll, absolute, ...rest }: ContainerProps) {
  return scroll ? (
    <ContainerScrollView {...rest}>{children}</ContainerScrollView>
  ) : (
    <ContainerView absolute={absolute} {...rest}>
      {children}
    </ContainerView>
  );
}

Container.defaultProps = {
  scroll: false,
  absolute: false,
};

export default Container;
