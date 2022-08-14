import React from 'react';
import { TextProps } from 'react-native';
import { titleFormatter } from '../../../utils/formatters';
import { TitleWrapper } from './styles';

interface TitleProps extends TextProps {
  children: string;
  limit?: boolean;
}

function Title({ children, limit, ...rest }: TitleProps) {
  return (
    <TitleWrapper {...rest}>{titleFormatter(children, limit)}</TitleWrapper>
  );
}

Title.defaultProps = {
  limit: false,
};

export default Title;
