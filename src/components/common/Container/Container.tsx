import { ScrollViewProps, ViewProps } from 'react-native';
import { ContainerScrollView, ContainerView } from './styles';

type ContainerProps = {
  scroll?: boolean;
} & (ViewProps | ScrollViewProps);

function Container({ children, scroll, ...rest }: ContainerProps) {
  return scroll ? (
    <ContainerScrollView {...rest}>{children}</ContainerScrollView>
  ) : (
    <ContainerView {...rest}>{children}</ContainerView>
  );
}

Container.defaultProps = {
  scroll: false,
};

export default Container;
