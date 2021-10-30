import React, { useState,useEffect, useCallback } from 'react';
import {ActivityIndicator} from 'react-native';
import {StyleSheet} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Transition } from 'react-native-reanimated';
import { HighlightCard } from '../../components/HighlightCard';
import { TransitionsCards,TransitionsCardProps } from '../../components/TransationCard';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { compareAsc, format } from 'date-fns'
import  {useFocusEffect} from '@react-navigation/native'
import RNDateFormat from 'react-native-date-format';
import {useTheme}from 'styled-components';
import CurrencyFormatter from "react-native-currency-format";
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
    LogoutButton,
    LoadContainer
} from './styles'

export interface DataListProps extends TransitionsCardProps{
    id:string;
}
interface HighlightProps {
    amount: string;
    lastTransaction :string;
  }
  
  interface HighlightData {
    entries: HighlightProps;
    expensives: HighlightProps;
    total: HighlightProps;
  }

export function Dashboard(){
    const [isLoading,setIsloading]=useState(true);
    const [trasations,setTrasations] = useState<DataListProps[]>([]);
    const theme= useTheme();
    const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData);

    function getLastTransitionDate(
        collection: DataListProps[],
        type: 'positive' | 'negative'
    ){
        const lastTransaction = new Date(Math.max.apply(Math,collection.
            filter(transaction => transaction.type==type).
            map(transaction =>new Date(transaction.date).getTime()))) ; 
        return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString('pt-BR',{month:'long'})}`;
    }

    function convertToReal(number, options = {}) {
        const { moneySign = true } = options;
    
        if(Number.isNaN(number) || !number) return "need a number as the first parameter";
    
        if(typeof number === "string") { // n1
            number = Number(number);
        }
    
        let res;
    
        const config = moneySign ? {style: 'currency', currency: 'BRL'} : {minimumFractionDigits: 2};
    
        moneySign
        ? res = number.toLocaleString('pt-BR', config)
        : res = number.toLocaleString('pt-BR', config)
    
        const needComma = number => number <= 1000;
        if(needComma(number)) {
            res = res.toString().replace(".", ",");
        }
    
        return res; // n2
    }
    async function loadTransations(){
        let entriesTotal = 0;
        let expensiveTotal = 0;
        const datakey = '@gofinances:transations';
        const response=  await AsyncStorage.getItem(datakey);
        //console.log(response)
        
        const currency = "BRL";
        const transations = response ? JSON.parse(response):[];
        const transactionsFormatted: DataListProps[] = transations
        .map((item: DataListProps) => {

    
    
          if(item.type === 'positive'){
            entriesTotal += Number(item.amount);
          }else {
            expensiveTotal += Number(item.amount);
          }
               const amount =  convertToReal(Number(item.amount),currency);
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
        setTrasations(transactionsFormatted)
        const lastTransactionEntries = getLastTransitionDate(transations,'positive');
        const lastTransactionExpensives = getLastTransitionDate(transations,'negative');
        const Totalnterval = `01 a ${lastTransactionExpensives}`


        const total = entriesTotal - expensiveTotal;
        setHighlightData({
            entries:{
                amount:convertToReal(entriesTotal,currency),
                lastTransaction:`Ultima entrada dia ${lastTransactionEntries}`
               //amount:'',
            },
            expensives:{
                amount:convertToReal(expensiveTotal,currency),
                //amount:'',
                lastTransaction:`Ultima saida dia ${lastTransactionExpensives}`
            },
            total: {
                amount:convertToReal(total,currency),
              // amount:'',
                lastTransaction:Totalnterval
              }

        });
        setIsloading(false)
       
      }
    useEffect(()=>{
        loadTransations();
       // const datakey = '@gofinances:transations';
       //  AsyncStorage.removeItem(datakey);
    },[])

    useFocusEffect(useCallback(() => {
        loadTransations();
    },[]));

    return(
        <Container>
        {
            isLoading? 
            <LoadContainer>
            <ActivityIndicator 
               color={theme.colors.primary}
               size='large'
               />
            </LoadContainer>
            :
         <>
        
        
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
                    amount={highlightData.entries.amount}
                    type="up"
                    lastTransaction={highlightData.entries.lastTransaction}
                    
                />
                <HighlightCard 
                    title="Saídas"
                    amount={highlightData.expensives.amount}
                    lastTransaction={highlightData.expensives.lastTransaction}
                    type="down"
                />
                <HighlightCard
                    title="Total"
                    amount={highlightData.total.amount}
                    lastTransaction={highlightData.total.lastTransaction}
                    type="total"
                />
            </HighlightCards> 
            <Transitions>
                <Title>Listagem</Title>
                <TransitionList
                    data={trasations}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=><TransitionsCards data={item} />}
                />
                

            </Transitions>
            </>
            }
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