import { Text } from 'react-native';
import styled from 'styled-components/native';

export const TitleWrapper = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 24px;
`;
