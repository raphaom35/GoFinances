import 'react-native-gesture-handler'
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import AppLoading from 'expo-app-loading'
import {ThemeProvider} from 'styled-components';
import {Routers} from './src/routes/';
import { Platform,StatusBar } from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold

} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'
import {AppRoutes} from './src/routes/app.routes';

import {SignIn} from './src/screens/SignIn';
import {AuthProvider,userAuth} from './src/hooks/auth';
export default function App() {
  const [fontsLoaded]=useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  const {userStorageloading}=userAuth();
  if(!fontsLoaded||userStorageloading){
    return <AppLoading/>
  }


  if (Platform.OS === "android") {
    // See https://github.com/expo/expo/issues/6536 for this issue.
    if (typeof (Intl as any).__disableRegExpRestore === "function") {
        (Intl as any).__disableRegExpRestore();
    }
}
  return (
      <ThemeProvider theme={theme}>
          <StatusBar barStyle='light-content'/>
          <AuthProvider>
          <Routers/>
          </AuthProvider>
      </ThemeProvider>
  );
}

