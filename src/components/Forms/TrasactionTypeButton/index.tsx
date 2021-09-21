import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Transition } from 'react-native-reanimated';

import {
    Container,
    Icon,
    Title
} from './styles'

interface Props extends TouchableOpacityProps{
    title: string;
    type:'up'|'down';
    isActive: boolean;
};

const icons ={
    up:'arrow-up-circle',
    down:'arrow-down-circle'
}

export function TrasactionTypeButton({title,type,isActive,...rest}:Props){
    return(
        <Container {...rest}  type={type} isActive={isActive}>
            <Icon type={type} name={icons[type]}/>
            <Title>{title}</Title>
        </Container>
    )
}
