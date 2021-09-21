import styled,{css} from 'styled-components/native';
import {TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


export const Container = styled(TextInput)`
    width:100%;
    padding: 16px 16px;
    font-size:${RFValue(14)}px;
    background-color:${({theme})=>theme.colors.shape};
    color:  ${({theme})=>theme.colors.text_dark};
    border-radius: 5px;
    margin-bottom: 8px;
    font-family: ${({theme})=>theme.fonts.regular};
`;

