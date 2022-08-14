import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

export const LayoutWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray._100};
`;
