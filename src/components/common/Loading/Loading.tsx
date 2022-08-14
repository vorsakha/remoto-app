import React from 'react';
import { theme } from '../../../styles/theme';
import { LoadingContainer, LoadingSpinner } from './styles';

function Loading() {
  return (
    <LoadingContainer>
      <LoadingSpinner color={theme.colors.violet._700} size="large" />
    </LoadingContainer>
  );
}

export default Loading;
