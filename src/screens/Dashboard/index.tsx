import React from 'react';
import {StyleSheet} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Transition } from 'react-native-reanimated';
import { HighlightCard } from '../../components/HighlightCard';
import { TransitionsCards,TransitionsCardProps } from '../../components/TransationCard';

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
    Transitions,
    Title,
    TransitionList,
} from './styles'

export interface DataListProps extends TransitionsCardProps{
    id:string;
}

const data:DataListProps =[
    {
    id:'1',
    type:'positive',
    title:"Desenvolvimento de site",
    amount:"R$ 12.000,00",
    category:{
        name:"Vendas",
        icon:"dollar-sign"
    },
    date:"13/04/2020"
    },
    {
        id:'2',
        type:'negative',
        title:"Hamburgueria Pizzy",
        amount:"R$ 59,00",
        category:{
            name:"Alimentação",
            icon:"coffee"
        },
        date:"13/04/2020"
    },
    {
        id:'3',
        type:'negative',
        title:"Aluguel do apartamento",
        amount:"R$ 1.200,00",
        category:{
            name:"Casa",
            icon:"shopping-bag"
        },
        date:"27/03/2020"
    },

];

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
                <HighlightCard 
                    title="Entradas"
                    amount="R$ 17.400,00"
                    type="up"
                    lastTransaction="Última entrada dia 13 de abril"
                    
                />
                <HighlightCard 
                    title="Saídas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última saída dia 03 de abril"
                    type="down"
                />
                <HighlightCard
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="01 à 16 de abril"
                    type="total"
                />
            </HighlightCards> 
            <Transitions>
                <Title>Listagem</Title>
                <TransitionList
                    data={data}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=><TransitionsCards data={item} />}
                />
                

            </Transitions>
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