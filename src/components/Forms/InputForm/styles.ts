import styled,{css} from 'styled-components/native';
import {TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export const Container = styled.View`
    width: 100%;
`;

export const Error = styled.Text`
    color:  ${({theme})=>theme.colors.attention};
    font-size:${RFValue(14)}px;
    font-family: ${({theme})=>theme.fonts.regular};
    margin:7px;
`;


