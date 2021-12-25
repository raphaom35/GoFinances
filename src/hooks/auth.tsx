import React,{createContext, ReactNode, useContext} from 'react';
import * as AuthSession from 'expo-auth-session';

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
}

function AuthProvider({children}:AuthProviderProps){
    const user={
        id:'123',
        name:'Raphael',
        email:'Raphael@agecom',
    }

    async function signInWithGoogle(){
        try {
            console.log("teet");
            const CLIENT_ID ='883707385665-r5s1djvmqjucd81fig1qm8ih9t1a8p9c.apps.googleusercontent.com';
            const REDIRECT_URI ='https://auth.expo.io/@rapha35/gofinances';
            const RESPONSE_TYPE = 'token';
            const SCOPE =encodeURI('profile email');

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
            console.log(authUrl);
            const response = await AuthSession.startAsync({authUrl});
            console.log(response);
        } catch (error) {
            throw new Error(error as string);
        }
    }

    return(
     <AuthContext.Provider value={{user,signInWithGoogle}}>
     {children}
     </AuthContext.Provider>
    )
}
function userAuth(){
    const context = useContext(AuthContext);
    return context;
}
export {userAuth,AuthProvider};