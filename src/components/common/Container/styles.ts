import styled from 'styled-components/native';

export const ContainerView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray._100};
`;

export const ContainerScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray._100};
  height: 100%;
`;
