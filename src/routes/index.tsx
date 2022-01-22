import React from "react";
import {NavigationContainer} from '@react-navigation/native';

import {AuthRoutes} from './auth.routes';
import {AppRoutes} from './app.routes';


import {userAuth} from '../hooks/auth';

export function Routers(){
    const {user} = userAuth();
    //console.log(user);
    return(
        <NavigationContainer>
            {user.id?<AppRoutes />:<AuthRoutes />}
            
        </NavigationContainer>
    );
}