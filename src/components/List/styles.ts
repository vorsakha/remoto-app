import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import styled from 'styled-components/native';

export const ListContainer = styled(View)`
  /* padding-vertical: 24px; */
  padding-top: 24px;
  background-color: ${({ theme }) => theme.colors.gray._100};
`;

export const ListItem = styled(TouchableOpacity).attrs({
  activeOpacity: 0.6,
})<TouchableOpacityProps>`
  border: 1px solid ${({ theme }) => theme.colors.violet._700};
  margin-vertical: 12px;
  border-radius: 5px;
  padding: 12px;
  justify-content: space-between;
  margin-horizontal: 24px;
`;

export const ListItemTitle = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 18px;
`;

export const ListItemDate = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 12px;
`;

export const BadgesList = styled(View)`
  padding-vertical: 12px;
`;

export const BadgesListItem = styled(View)`
  border: 1px solid ${({ theme }) => theme.colors.violet._700};
  padding: 6px 12px;
  border-radius: 10px;
  margin-right: 6px;
  flex-direction: row;
`;

export const BadgesListItemIcon = styled(View)<{ isEmpty: boolean }>`
  margin-right: ${({ isEmpty }) => (isEmpty ? 0 : '3px')};
`;

export const BadgesListItemTitle = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.violet._700};
  font-size: 14px;
`;
