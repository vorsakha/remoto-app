import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import { Container, Title } from '../common';

interface ListItemProps extends TouchableOpacityProps {
  isEnd: boolean;
  isStart: boolean;
}

export const ListContainer = styled(Container)``;

export const ListItem = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})<ListItemProps>`
  border: 1px solid ${({ theme }) => theme.colors.violet.transparency};
  border-radius: 5px;
  margin-bottom: ${({ isEnd }) => (isEnd ? '24px' : 0)};
  margin-top: ${({ isStart }) => (isStart ? '24px' : 0)};
  padding: 12px;
  justify-content: space-between;
  margin-horizontal: 24px;
  min-height: 170px;
  background-color: ${({ theme }) => theme.colors.white};

  elevation: 6;
  shadow-opacity: 0.1;
  shadow-color: ${({ theme }) => theme.colors.violet._300};
  shadow-radius: 5px;
`;

export const ListItemTitle = styled(Title)`
  font-size: 18px;
`;

export const ListItemDate = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 12px;
`;

export const BadgesList = styled(View)`
  padding-vertical: 12px;
`;

export const Separator = styled(View)`
  padding-vertical: 12px;
`;
