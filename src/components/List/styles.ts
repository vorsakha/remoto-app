import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import { Title } from '../common';

export const ListContainer = styled(View)`
  /* padding-vertical: 24px; */
  /* padding-top: 24px; */
  background-color: ${({ theme }) => theme.colors.gray._100};
`;

export const ListItem = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})<TouchableOpacityProps>`
  border: 1px solid ${({ theme }) => theme.colors.violet.transparency};
  margin-vertical: 12px;
  border-radius: 5px;
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
