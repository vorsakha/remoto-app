import styled from 'styled-components/native';
import { ButtonIcon, Title } from '../common';

export const HeaderContainer = styled.View`
  flex-direction: row;
  padding-top: 48px;
  padding-bottom: 12px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.violet._700};
`;
export const HeaderTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.white};
`;
export const HeaderIcon = styled(ButtonIcon)`
  position: absolute;
  left: 24px;
  bottom: 12px;
  color: ${({ theme }) => theme.colors.white};
`;
