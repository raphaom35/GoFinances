import React,{useContext} from 'react';
import { ActivityIndicator, Alert,Platform } from 'react-native';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
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
  const[insLoading,setInsLoading]=React.useState(false);
  const {signInWithGoogle}= userAuth();
  const theme= useTheme();
  async function handleSignInWithGoogle() {
    try {
      setInsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar a conta Google');
      setInsLoading(false);
    }
      
    
  }
  async function handleSignInWithAplle() {
    try {
      setInsLoading(true);
      return await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar a conta Apple');
      setInsLoading(false);
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
            {Platform.OS==='ios' && 
             <SignSocialButton
              title="Entrar com iOS"
              svg={AppleSvg}
              onPress={handleSignInWithAplle}
            />
            }
        </FooterWrapper>
        {insLoading && <ActivityIndicator color={theme.colors.shape}  style={{margin:18}} size="large"/>}
      </Footer> 
    </Container>
  );
}

export default SignIn;

function signInWithApple() {
  throw new Error('Function not implemented.');
}
