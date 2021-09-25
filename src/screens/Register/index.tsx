import React,{useState} from 'react';
import {Modal} from 'react-native';
import { useForm } from "react-hook-form";
import { getBottomSpace } from 'react-native-iphone-x-helper';


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
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';
import { InputForm } from '../../components/Forms/InputForm';

interface FormData {
    name:string;
    amount:string
}

export function Register(){
    const [trasactionType,setTrasactionType]= useState('');
    const [categoryModalOpen,setCategoryModalOpen]= useState(false);


    const [category,setCategory]= useState({
        key: 'category',
        name: 'Categoria',
    });

    const {
        control,
        handleSubmit
    } =useForm();

    function handleTrasactionTypeSelect(type:'up'|'down'){
        setTrasactionType(type);
    }
    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false);
    }
    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true);
    }



    function handleRegister(form:FormData){
        const data={
            name:form.name,
            amount:form.amount,
           trasactionType,
            category:category.key
        }


        console.log(data)
    }

    return(
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
          />

          <InputForm
            name="amount"
            control={control}
            placeholder="Preço"
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
    )

}
