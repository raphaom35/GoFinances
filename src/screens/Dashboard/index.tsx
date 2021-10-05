import React, { useState,useEffect } from 'react';
import {StyleSheet} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Transition } from 'react-native-reanimated';
import { HighlightCard } from '../../components/HighlightCard';
import { TransitionsCards,TransitionsCardProps } from '../../components/TransationCard';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { compareAsc, format } from 'date-fns'
import RNDateFormat from 'react-native-date-format';
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
    LogoutButton
} from './styles'

export interface DataListProps extends TransitionsCardProps{
    id:string;
}



export function Dashboard(){
    const [data,setData] = useState<DataListProps[]>([]);
    const datakey = '@gofinances:transations';
    async function loadTransations(){
        const response=  await AsyncStorage.getItem(datakey);
        console.log(response)
        const transations = response ? JSON.parse(response):[];
        const transationsFormatted:DataListProps[] = transations.map(
            (item:DataListProps) =>{
               const amount ="R$"+Number(item.amount);
               var data = new Date(item.date);
               const date = format(data, 'dd/MM/yyyy');
               return{
                   id:item.id,
                   name:item.name,
                   amount,
                   type:item.type,
                   category:item.category,
                   date

               }
            }
        );
        //console.log(JSON.parse(data!))
        setData(transationsFormatted)

       
      }
    useEffect(()=>{
        //async function removeAll(){
       //    await AsyncStorage.removeItem(datakey);
       // }
       // removeAll();
        loadTransations();
    },[])

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
                <LogoutButton onPress={()=>{}}>
                    <Icon name="power" />
                </LogoutButton>
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