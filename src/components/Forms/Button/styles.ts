import styled,{css} from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {RectButton} from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
    width: 100%;
    background-color:${({theme})=>theme.colors.secondary};
    border-radius: 5px;
    padding:18px;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    color:  ${({theme})=>theme.colors.shape};
    font-size:${RFValue(14)}px;
`;
