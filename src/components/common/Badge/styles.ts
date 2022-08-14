import styled from 'styled-components/native';

export const BadgeWrapper = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.violet._700};
  padding: 6px 12px;
  border-radius: 10px;
  margin-right: 6px;
  flex-direction: row;
`;
export const BadgeIcon = styled.Text<{ isEmpty: boolean }>`
  margin-right: ${({ isEmpty }) => (isEmpty ? 0 : '3px')};
`;
export const BadgeTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.violet._700};
  font-size: 14px;
`;
