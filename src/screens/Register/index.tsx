import React,{useState,useEffect} from 'react';
import {Modal,
        TouchableWithoutFeedback,
        Keyboard,
        Alert
} from 'react-native';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { getBottomSpace } from 'react-native-iphone-x-helper';
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Button } from '../../components/Forms/Button';
import { TrasactionTypeButton } from '../../components/Forms/TrasactionTypeButton';
import uuid from 'react-native-uuid';

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TrasactionType

} from './styles'
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';
import { InputForm } from '../../components/Forms/InputForm';

interface FormData {
    name:string;
    amount:string
}
const schema =Yup.object().shape({
    name:Yup
        .string()
        .required('Nome é obrigatório'),
    amount:Yup
        .number()
        .typeError('Informe um valor numerico')
        .positive('O valor nao pode ser negativo')
})

export function Register(){
    const [trasactionType,setTrasactionType]= useState('');
    const [categoryModalOpen,setCategoryModalOpen]= useState(false);


    const [category,setCategory]= useState({
        key: 'category',
        name: 'Categoria',
    });
    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        reset,
        formState:{errors}
    } =useForm({
        resolver:yupResolver(schema)
        
    });

    function handleTrasactionTypeSelect(type:'up'|'down'){
        setTrasactionType(type);
    }
    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false);
    }
    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true);
    }



   async function handleRegister(form:FormData){
    const datakey = '@gofinances:transations';
        if(!trasactionType)
        return Alert.alert('Selecione o tipo da transação');
  
      if(category.key === 'category')
        return Alert.alert('Selecione a categoria');


        const newTransaction ={
            id:String(uuid.v4()),
            name:form.name,
            amount:form.amount,
           trasactionType,
            category:category.key,
            date:new Date()
        }

        //console.log(category.key)
        //console.log(data)
        try {
            const data=  await AsyncStorage.getItem(datakey);
            const currentdata =data?JSON.parse(data):[];

            const dataFormatted =[
                ...currentdata,newTransaction
            ]

            await AsyncStorage.setItem(datakey,JSON.stringify(dataFormatted));
            reset();
            setTrasactionType('');
            setCategory({
                key: 'category',
                name: 'Categoria',
            });
            navigation.navigate('Listagem')
        } catch (error) {
            console.log(error);
            Alert.alert("Não foi posivel salvar")
        }
    }
 
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            
           <Header>
               <Title>Cadastro</Title>   
           </Header> 
           <Form>
             <Fields>
             <InputForm
            name="name"
            control={control}
            placeholder="Nome"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.name && errors.name.message}
          />

          <InputForm
            name="amount"
            control={control}
            placeholder="Preço"
            keyboardType="numeric"
            error={errors.amount && errors.amount.message}
            
          />
                <TrasactionType>
                <TrasactionTypeButton 
                    title="Income" 
                    type="up"
                    onPress={()=>handleTrasactionTypeSelect('up')} 
                    isActive={trasactionType==='up'}
                />
                <TrasactionTypeButton 
                    title="Outcome" 
                    type="down" 
                    onPress={()=>handleTrasactionTypeSelect('down')}
                    isActive={trasactionType==='down'}
                />
                </TrasactionType>
                <CategorySelectButton 
                    title={category.name}
                    onPress={handleOpenSelectCategoryModal}
                />
             </Fields>
           <Button 
            title="Enviar"
            onPress={handleSubmit(handleRegister)}
             />
           </Form>

           <Modal visible={categoryModalOpen}>
           <CategorySelect 
                  category={category}
                  setCategory={setCategory}
                  closeSelectCategory={handleCloseSelectCategoryModal}
           />
           </Modal>
           
        </Container>
        </TouchableWithoutFeedback>
    )

}
