import React,{useContext} from 'react';
import { Alert } from 'react-native';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { userAuth } from '../../hooks/auth';
import {SignSocialButton} from '../../components/SignSocialButton';

 import { 
   Container,
   Header,
   TitleWrapper,
   Title,
   SignInTitle,
   Footer,
   FooterWrapper
} from './styles';

export function SignIn() {
  const {signInWithGoogle}= userAuth();
  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar a conta Google');
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg 
            width={RFValue(120)}
            height={RFValue(68)}
          />
          <Title>
          Controle suas {'\n'}
          finanças de forma {'\n'}
          muito simples
          </Title>
        </TitleWrapper> 
        <SignInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo {'\n'}
        </SignInTitle>
   
      </Header>
      <Footer>
        <FooterWrapper>
            <SignSocialButton
              title="Entrar com o Google"
              svg={GoogleSvg}
              onPress={handleSignInWithGoogle}
            />
             <SignSocialButton
              title="Entrar com iOS"
              svg={AppleSvg}
            />
        </FooterWrapper>
      </Footer> 
    </Container>
  );
}

export default SignIn;