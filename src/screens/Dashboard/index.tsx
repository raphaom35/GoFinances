import React from 'react';
import {StyleSheet} from 'react-native';
import { HighlightCard } from '../../components/HighlightCard';

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    User,
    Photo,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
} from './styles'

export function Dashboard(){
    return(
        <Container>
           <Header>
            <UserWrapper>
             <UserInfo>
                    <Photo source={{uri:'https://github.com/raphaom35.png'}}/>
                    <User>
                        <UserGreeting>Ola, </UserGreeting>
                        <UserName>Raphael</UserName>
                    </User>
                </UserInfo> 
                <Icon name="power" />
            </UserWrapper> 
           
           </Header>
           <HighlightCards> 
                <HighlightCard/>
                <HighlightCard/>
                <HighlightCard/>
            </HighlightCards> 
        </Container>
    )

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#cecece',
        
    }
})