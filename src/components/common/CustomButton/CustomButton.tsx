import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonText, ButtonWrapper } from './styles';

interface CustomButtonProps extends TouchableOpacityProps {
  children: string;
}

function CustomButton({ children, ...rest }: CustomButtonProps) {
  return (
    <ButtonWrapper {...rest}>
      <ButtonText>{children}</ButtonText>
    </ButtonWrapper>
  );
}

export default CustomButton;
