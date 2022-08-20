import styled from 'styled-components/native';
import { ButtonIcon, Container } from '../common';

export const FooterContainer = styled(Container)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const MailIcon = styled(ButtonIcon)``;
export const LinkIcon = styled(ButtonIcon)`
  margin-left: 48px;
`;
