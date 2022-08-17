import styled from 'styled-components/native';

export const ContainerView = styled.View<{ absolute: boolean }>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray._100};
  position: ${({ absolute }) => (absolute ? 'absolute' : 'static')};
  top: 0;
  height: ${({ absolute }) => (absolute ? '100%' : 'auto')};
  width: ${({ absolute }) => (absolute ? '100%' : 'auto')};
`;

export const ContainerScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray._100};
  height: 100%;
`;
