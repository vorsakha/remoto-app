import styled from 'styled-components/native';
import { ContainerProps } from './Container';

export const ContainerView = styled.View<ContainerProps>`
  flex: ${({ flex }) => flex};
  background-color: ${({ theme, background }) =>
    background || theme.colors.gray._100};
  position: ${({ position }) => position};
  top: 0;
  height: ${({ position }) => (position === 'absolute' ? '100%' : 'auto')};
  width: ${({ position }) => (position === 'absolute' ? '100%' : 'auto')};
`;

export const ContainerScrollView = styled.ScrollView<ContainerProps>`
  flex: ${({ flex }) => flex};
  background-color: ${({ theme }) => theme.colors.gray._100};
  height: 100%;
`;
