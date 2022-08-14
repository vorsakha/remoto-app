import { ActivityIndicator, View } from 'react-native';
import styled from 'styled-components/native';

export const LoadingContainer = styled(View)`
  flex: 1;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
`;
export const LoadingSpinner = styled(ActivityIndicator)``;
