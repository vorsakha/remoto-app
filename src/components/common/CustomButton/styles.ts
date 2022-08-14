import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

export const ButtonWrapper = styled(
  TouchableOpacity,
).attrs<TouchableOpacityProps>({
  activeOpacity: 0.8,
})`
  border-radius: 6px;
  height: 50px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.colors.violet._700};
  justify-content: center;
  align-items: center;
  elevation: 5;
`;

export const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`;
