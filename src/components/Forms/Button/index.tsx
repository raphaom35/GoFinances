import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Transition } from 'react-native-reanimated';

import {Container,Title} from './styles'

interface Props extends TouchableOpacityProps{
    title: string;
};

export function Button({title,...rest}:Props){
    return(
        <Container {...rest}>
            <Title>
            {title}
            </Title>
        </Container>
    )
}