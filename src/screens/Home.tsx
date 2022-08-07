import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

function Home() {
  return (
    <StyledContainer>
      <StyledText>Open up App.tsx to start working on your app!</StyledText>
    </StyledContainer>
  );
}

const StyledContainer = styled(View)`
  flex: 1;
  background-color: '#fff';
  align-items: center;
  justify-content: center;
`;

const StyledText = styled(Text)`
  font-family: '${({ theme }) => theme.fonts.primary}';
  font-size: 30px;
`;

export default Home;
