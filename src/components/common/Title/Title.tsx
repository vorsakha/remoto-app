import React from 'react';
import { TextProps } from 'react-native';
import { TitleWrapper } from './styles';

interface TitleProps extends TextProps {
  children: string;
}

function Title({ children, ...rest }: TitleProps) {
  return <TitleWrapper {...rest}>{children}</TitleWrapper>;
}

export default Title;
