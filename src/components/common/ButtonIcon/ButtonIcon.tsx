import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { ButtonIconWrapper } from './styles';
import colors from '../../../styles/theme/colors';

interface ButtonIconProps extends TouchableOpacityProps {
  icon: keyof typeof Ionicons.glyphMap;
  color?: string;
}

function ButtonIcon({ icon, color, ...rest }: ButtonIconProps) {
  return (
    <ButtonIconWrapper {...rest}>
      <Ionicons name={icon} size={32} color={color || colors.violet._700} />
    </ButtonIconWrapper>
  );
}

ButtonIcon.defaultProps = {
  color: null,
};

export default ButtonIcon;
