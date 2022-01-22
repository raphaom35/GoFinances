import React,{createContext, ReactNode, useContext,useState,useEffect} from 'react';
import * as AuthSession from 'expo-auth-session';
import * as AppleAuthentication from 'expo-apple-authentication';
import { AsyncStorage } from 'react-native';
import {CLIENT_ID,REDIRECT_URI} from '@env';
export const AuthContext = createContext({} as IAuthContextData)

interface AuthProviderProps{
    children:ReactNode;
}
interface User{
    id:string;
    name:string;
    email:string;
    photo?:string;
}
interface IAuthContextData{
    user:User;
    signInWithGoogle:()=>Promise<void>;
    signInWithApple:()=>Promise<void>;
    signOut:()=>Promise<void>;
    userStorageloading:boolean;
}

interface AuthorizationResponse{
    params:{
        access_token:string;
    };
    type:string;
}

function AuthProvider({children}:AuthProviderProps){
    const [user,setUser]=useState<User>({} as User);
    const [userStorageloading,setuserStorageLoading]=useState(true);
    const userStoragekey='@gofinaces:user';
    async function signInWithGoogle(){
        try {
            const RESPONSE_TYPE = 'token';
            const SCOPE =encodeURI('profile email');

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
            //console.log(authUrl);
            const {type,params} = await AuthSession
            .startAsync({authUrl}) as AuthorizationResponse;
            if(type==='success'){
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
                const userInfo = await response.json();
                //console.log(userInfo);
                const userLoagged={
                    id:userInfo.id,
                    email:userInfo.email,
                    name:userInfo.given_name,
                    photo:userInfo.picture
                }
                setUser(userLoagged)
                await AsyncStorage.setItem(userStoragekey,JSON.stringify(userLoagged));
            }

        } catch (error) {
            throw new Error(error as string);
        }
    }
    async function signOut(){
        setUser({} as User);
        await AsyncStorage.removeItem(userStoragekey);
    }
    async function signInWithApple(){
        try {
            const credential = await AppleAuthentication.signInAsync({
                requestedScopes:[
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ]

                
            })
            if(credential){
                const userLoagged={
                    id:String(credential.user),
                    email:credential.email!,
                    name:credential.fullName!.givenName!,
                    photo:`https://ui-avatars.com/api/?name=${credential.fullName!.givenName}&length=1`
                }
                setUser(userLoagged)
                console.log(userLoagged);
                await AsyncStorage.setItem(userStoragekey,JSON.stringify(userLoagged));
            }
        } catch (error) {
            throw new Error(error as string);
        }
    }
    useEffect(()=>{
        AsyncStorage.removeItem(`@gofinaces:user`)
        async function loadStorageData(){
            const storagedUser = await AsyncStorage.getItem(userStoragekey);
            if(storagedUser){
                setUser(JSON.parse(storagedUser) as User);
            }
            setuserStorageLoading(false);
        }
        loadStorageData();
    },[])
    return(
     <AuthContext.Provider value={{user,signInWithGoogle,signInWithApple,signOut,userStorageloading}}>
     {children}
     </AuthContext.Provider>
    )
}

function userAuth(){
    const context = useContext(AuthContext);
    return context;
}
export {userAuth,AuthProvider};