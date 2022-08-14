import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { theme } from '../../styles/theme';
import { HeaderContainer, HeaderIcon, HeaderTitle } from './styles';

function Header({ title }: { title: string }) {
  const { name } = useRoute();
  const { goBack } = useNavigation();

  return (
    <HeaderContainer>
      {name !== 'Home' && (
        <HeaderIcon
          onPress={() => goBack()}
          icon="ios-chevron-back"
          color={theme.colors.white}
        />
      )}
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
}

export default Header;
