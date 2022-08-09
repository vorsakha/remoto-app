import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonText, ButtonWrapper } from './styles';

interface CustomButtonProps extends TouchableOpacityProps {
  text: string;
}

function CustomButton({ text, ...rest }: CustomButtonProps) {
  return (
    <ButtonWrapper {...rest}>
      <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  );
}

export default CustomButton;
