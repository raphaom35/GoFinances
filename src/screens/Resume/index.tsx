import React, { useEffect } from 'react';
import { View } from 'react-native';
import HistoryCard from '../../components/HistoryCard';
import AsyncStorage from "@react-native-async-storage/async-storage"

 import { 
     Container,
     Header,
     Title,
     Content,
    
    } from './styles';
import { categories } from '../../utils/categories';
import { ScrollView } from 'react-native-gesture-handler';
export interface TransitionsData {
        type:'positive' | 'negative';
        name: string;
        amount:string;
        category:string;
        date:string;
}
export interface CategoryData { 
    key:string;
    name: string;
    total:string;
    color:string;
}
export function Resume () {
    const[totalByCategories, setTotalByCategories] = React.useState<CategoryData[]>([]);
    const totalByCategory:CategoryData[] = [];
 async function loadData() {

    const datakey = '@gofinances:transations';
    const response=  await AsyncStorage.getItem(datakey);  
    const currency = "BRL";
    const responseFormatted = response ? JSON.parse(response):[];
    const expensives = responseFormatted.filter((expensive:TransitionsData) => expensive.type ===  'negative');

    categories.forEach((category:any) => {
        let categorySum=0;
        expensives.forEach((expensive:TransitionsData) => {
            if(category.key === expensive.category){
                categorySum += Number(expensive.amount);
            }
        })
        if(categorySum>0){
        const total= categorySum.toLocaleString('pt-BR', { style: 'currency', currency:'BRL' })
        totalByCategory.push({
            key:category.key,
            name: category.name,
            color:category.color,
            total:total
        });
    }
    }); 
    setTotalByCategories(totalByCategory);
  
}
 useEffect(() => {
    loadData();
 },[])

  return (
    <Container>
        <Header>
               <Title>Resumo por Categoria</Title>   
           </Header> 
           <Content>
         {
             totalByCategories.map((category:CategoryData) => (
                <HistoryCard
                key={category.key}
                title={category.name}
                amount={category.total}
                color={category.color}
            />
             ))
         }
         </Content>
            
    </Container>
);
}

export default Resume;