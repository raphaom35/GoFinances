import React from 'react';
import {TextInputProps} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Transition } from 'react-native-reanimated';

import {Container} from './styles'

type Props = TextInputProps;

export function Input({...rest}:Props){
    return(
        <Container {...rest}/>
    )
}
