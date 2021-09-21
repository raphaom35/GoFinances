import React,{useState} from 'react';
import {StyleSheet} from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Transition } from 'react-native-reanimated';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { TrasactionTypeButton } from '../../components/Forms/TrasactionTypeButton';


import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TrasactionType

} from './styles'

export function Register(){
    const [trasactionType,setTrasactionType]= useState('');

    function handleTrasactionTypeSelect(type:'up'|'down'){
        setTrasactionType(type);
    }

    return(
        <Container>
           <Header>
               <Title>Cadastro</Title>   
           </Header> 
           <Form>
             <Fields>
                <Input placeholder="nome"/>
                <Input placeholder="Preço"/>
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
             </Fields>
           <Button title="Enviar" />
           </Form>
        </Container>
    )

}
