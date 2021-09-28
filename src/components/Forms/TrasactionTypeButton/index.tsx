import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Transition } from 'react-native-reanimated';

import {
    Container,
    Icon,
    Title,
    Button
} from './styles'

interface Props extends RectButtonProps{
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
        <Container  type={type} isActive={isActive}>
            <Button {...rest} >
            <Icon type={type} name={icons[type]}/>
            <Title>{title}</Title>
            </Button>
        </Container>
    )
}
