import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const LayoutWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.violet._700};
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;
