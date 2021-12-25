import React from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import {SvgProps} from 'react-native-svg';
import { 
    Button,
    ImagemContainer,
    Text
 } from './styles';

interface Props extends RectButtonProps {
   title: string;
   svg:React.FC<SvgProps> 

}

export function SignSocialButton({
    title,
    svg:Svg,
    ...rest
}:Props) {
  return (
    <Button {...rest}>
        <ImagemContainer>
            <Svg />
        </ImagemContainer>
        <Text>
            {title}
        </Text>
    </Button>
  );
}

export default SignSocialButton;