import React from 'react';
import {TextInputProps} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Transition } from 'react-native-reanimated';

import {
    Container,
    Category,
    Icon
} from './styles'

interface Props {
    title:string;
    onPress:()=>void;
}

export function CategorySelectButton({title,onPress}:Props){
    return(
        <Container onPress={onPress}>
            <Category>{title}</Category>
            <Icon name="chevron-down"/>
        </Container>
    )
}
